const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB Table from manual throughput to autoscale
 *
 * @summary Migrate an Azure Cosmos DB Table from manual throughput to autoscale
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBTableMigrateToAutoscale.json
 */
async function cosmosDbTableMigrateToAutoscale() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const tableName = "tableName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.tableResources.beginMigrateTableToAutoscaleAndWait(
    resourceGroupName,
    accountName,
    tableName
  );
  console.log(result);
}

cosmosDbTableMigrateToAutoscale().catch(console.error);
