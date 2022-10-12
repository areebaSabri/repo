const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB SQL container from manual throughput to autoscale
 *
 * @summary Migrate an Azure Cosmos DB SQL container from manual throughput to autoscale
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBSqlContainerMigrateToAutoscale.json
 */
async function cosmosDbSqlContainerMigrateToAutoscale() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginMigrateSqlContainerToAutoscaleAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    containerName
  );
  console.log(result);
}

cosmosDbSqlContainerMigrateToAutoscale().catch(console.error);
