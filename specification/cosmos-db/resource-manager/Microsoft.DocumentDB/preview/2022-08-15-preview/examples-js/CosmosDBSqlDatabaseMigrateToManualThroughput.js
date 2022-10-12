const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB SQL database from autoscale to manual throughput
 *
 * @summary Migrate an Azure Cosmos DB SQL database from autoscale to manual throughput
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBSqlDatabaseMigrateToManualThroughput.json
 */
async function cosmosDbSqlDatabaseMigrateToManualThroughput() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginMigrateSqlDatabaseToManualThroughputAndWait(
    resourceGroupName,
    accountName,
    databaseName
  );
  console.log(result);
}

cosmosDbSqlDatabaseMigrateToManualThroughput().catch(console.error);
