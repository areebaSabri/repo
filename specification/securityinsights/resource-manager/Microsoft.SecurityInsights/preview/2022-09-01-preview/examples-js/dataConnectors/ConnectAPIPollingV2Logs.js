const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Connects a data connector.
 *
 * @summary Connects a data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/dataConnectors/ConnectAPIPollingV2Logs.json
 */
async function connectAnApiPollingV2LogsDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "316ec55e-7138-4d63-ab18-90c8a60fd1c8";
  const connectBody = {
    apiKey: "123456789",
    dataCollectionEndpoint: "https://test.eastus.ingest.monitor.azure.com",
    dataCollectionRuleImmutableId: "dcr-34adsj9o7d6f9de204478b9cgb43b631",
    kind: "APIKey",
    outputStream: "Custom-MyTableRawData",
    requestConfigUserInputValues: [
      {
        displayText: "Organization Name",
        placeHolderName: "{{placeHolder1}}",
        placeHolderValue: "somePlaceHolderValue",
        requestObjectKey: "apiEndpoint",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.connect(
    resourceGroupName,
    workspaceName,
    dataConnectorId,
    connectBody
  );
  console.log(result);
}

connectAnApiPollingV2LogsDataConnector().catch(console.error);
