const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB Cassandra view from autoscale to manual throughput
 *
 * @summary Migrate an Azure Cosmos DB Cassandra view from autoscale to manual throughput
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBCassandraViewMigrateToManualThroughput.json
 */
async function cosmosDbCassandraViewMigrateToManualThroughput() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspacename";
  const viewName = "viewname";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraResources.beginMigrateCassandraViewToManualThroughputAndWait(
    resourceGroupName,
    accountName,
    keyspaceName,
    viewName
  );
  console.log(result);
}

cosmosDbCassandraViewMigrateToManualThroughput().catch(console.error);
