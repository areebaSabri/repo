const { KustoManagementClient } = require("@azure/arm-kusto");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Returns a list of database principals of the given Kusto cluster and database.
 *
 * @summary Returns a list of database principals of the given Kusto cluster and database.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-07-07/examples/KustoDatabaseListPrincipals.json
 */
async function kustoDatabaseListPrincipals() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "KustoDatabase8";
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.databases.listPrincipals(
    resourceGroupName,
    clusterName,
    databaseName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

kustoDatabaseListPrincipals().catch(console.error);
