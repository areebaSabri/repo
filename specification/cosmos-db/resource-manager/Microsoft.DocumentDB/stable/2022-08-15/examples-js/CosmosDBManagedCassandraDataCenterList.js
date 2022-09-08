const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List all data centers in a particular managed Cassandra cluster.
 *
 * @summary List all data centers in a particular managed Cassandra cluster.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBManagedCassandraDataCenterList.json
 */
async function cosmosDbManagedCassandraDataCenterList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "cassandra-prod-rg";
  const clusterName = "cassandra-prod";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.cassandraDataCenters.list(resourceGroupName, clusterName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

cosmosDbManagedCassandraDataCenterList().catch(console.error);
