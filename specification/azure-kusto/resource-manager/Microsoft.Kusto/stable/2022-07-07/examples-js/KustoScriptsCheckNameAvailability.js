const { KustoManagementClient } = require("@azure/arm-kusto");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Checks that the script name is valid and is not already in use.
 *
 * @summary Checks that the script name is valid and is not already in use.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-07-07/examples/KustoScriptsCheckNameAvailability.json
 */
async function kustoScriptsCheckNameAvailability() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "db";
  const scriptName = {
    name: "kustoScriptName1",
    type: "Microsoft.Kusto/clusters/databases/scripts",
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.scripts.checkNameAvailability(
    resourceGroupName,
    clusterName,
    databaseName,
    scriptName
  );
  console.log(result);
}

kustoScriptsCheckNameAvailability().catch(console.error);
