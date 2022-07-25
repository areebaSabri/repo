const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB Table from autoscale to manual throughput
 *
 * @summary Migrate an Azure Cosmos DB Table from autoscale to manual throughput
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBTableMigrateToManualThroughput.json
 */
async function cosmosDbTableMigrateToManualThroughput() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const tableName = "tableName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.tableResources.beginMigrateTableToManualThroughputAndWait(
    resourceGroupName,
    accountName,
    tableName
  );
  console.log(result);
}

cosmosDbTableMigrateToManualThroughput().catch(console.error);
