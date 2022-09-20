const { KustoManagementClient } = require("@azure/arm-kusto");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Checks that the data connection name is valid and is not already in use.
 *
 * @summary Checks that the data connection name is valid and is not already in use.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-07-07/examples/KustoDataConnectionsCheckNameAvailability.json
 */
async function kustoDataConnectionsCheckNameAvailability() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "KustoDatabase8";
  const dataConnectionName = {
    name: "DataConnections8",
    type: "Microsoft.Kusto/clusters/databases/dataConnections",
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.dataConnections.checkNameAvailability(
    resourceGroupName,
    clusterName,
    databaseName,
    dataConnectionName
  );
  console.log(result);
}

kustoDataConnectionsCheckNameAvailability().catch(console.error);
