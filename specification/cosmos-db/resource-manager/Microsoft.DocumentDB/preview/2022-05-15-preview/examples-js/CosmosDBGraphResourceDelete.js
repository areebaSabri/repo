const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes an existing Azure Cosmos DB Graph Resource.
 *
 * @summary Deletes an existing Azure Cosmos DB Graph Resource.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBGraphResourceDelete.json
 */
async function cosmosDbSqlDatabaseDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const graphName = "graphName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.graphResources.beginDeleteGraphResourceAndWait(
    resourceGroupName,
    accountName,
    graphName
  );
  console.log(result);
}

cosmosDbSqlDatabaseDelete().catch(console.error);
