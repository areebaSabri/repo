const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates the data connector.
 *
 * @summary Creates or updates the data connector.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/dataConnectors/CreateThreatIntelligenceTaxiiDataConnector.json
 */
async function createsOrUpdatesAThreatIntelligenceTaxiiDataConnector() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorId = "73e01a99-5cd7-4139-a149-9f2736ff2ab5";
  const dataConnector = {
    collectionId: "135",
    dataTypes: { taxiiClient: { state: "Enabled" } },
    etag: "d12423f6-a60b-4ca5-88c0-feb1a182d0f0",
    friendlyName: "testTaxii",
    kind: "ThreatIntelligenceTaxii",
    password: "--",
    pollingFrequency: "OnceADay",
    taxiiLookbackPeriod: new Date("2020-01-01T13:00:30.123Z"),
    taxiiServer: "https://limo.anomali.com/api/v1/taxii2/feeds",
    tenantId: "06b3ccb8-1384-4bcc-aec7-852f6d57161b",
    userName: "--",
    workspaceId: "dd124572-4962-4495-9bd2-9dade12314b4",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectors.createOrUpdate(
    resourceGroupName,
    workspaceName,
    dataConnectorId,
    dataConnector
  );
  console.log(result);
}

createsOrUpdatesAThreatIntelligenceTaxiiDataConnector().catch(console.error);
