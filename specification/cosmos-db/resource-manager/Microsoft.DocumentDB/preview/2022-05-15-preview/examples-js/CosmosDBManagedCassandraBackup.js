const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the properties of an individual backup of this cluster that is available to restore.
 *
 * @summary Get the properties of an individual backup of this cluster that is available to restore.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBManagedCassandraBackup.json
 */
async function cosmosDbManagedCassandraBackup() {
  const subscriptionId = "subid";
  const resourceGroupName = "cassandra-prod-rg";
  const clusterName = "cassandra-prod";
  const backupId = "1611250348";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraClusters.getBackup(resourceGroupName, clusterName, backupId);
  console.log(result);
}

cosmosDbManagedCassandraBackup().catch(console.error);
