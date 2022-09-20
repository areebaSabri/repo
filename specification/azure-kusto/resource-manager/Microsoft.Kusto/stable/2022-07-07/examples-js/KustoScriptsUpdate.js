const { KustoManagementClient } = require("@azure/arm-kusto");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates a database script.
 *
 * @summary Updates a database script.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-07-07/examples/KustoScriptsUpdate.json
 */
async function kustoScriptsUpdate() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "KustoDatabase8";
  const scriptName = "kustoScript";
  const parameters = {
    continueOnErrors: true,
    forceUpdateTag: "2bcf3c21-ffd1-4444-b9dd-e52e00ee53fe",
    scriptUrl: "https://mysa.blob.core.windows.net/container/script.txt",
    scriptUrlSasToken:
      "?sv=2019-02-02&st=2019-04-29T22%3A18%3A26Z&se=2019-04-30T02%3A23%3A26Z&sr=b&sp=rw&sip=168.1.5.60-168.1.5.70&spr=https&sig=********************************",
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.scripts.beginUpdateAndWait(
    resourceGroupName,
    clusterName,
    databaseName,
    scriptName,
    parameters
  );
  console.log(result);
}

kustoScriptsUpdate().catch(console.error);
