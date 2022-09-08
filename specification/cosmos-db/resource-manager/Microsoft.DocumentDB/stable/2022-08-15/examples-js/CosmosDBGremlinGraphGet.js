const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the Gremlin graph under an existing Azure Cosmos DB database account.
 *
 * @summary Gets the Gremlin graph under an existing Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBGremlinGraphGet.json
 */
async function cosmosDbGremlinGraphGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rgName";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const graphName = "graphName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.gremlinResources.getGremlinGraph(
    resourceGroupName,
    accountName,
    databaseName,
    graphName
  );
  console.log(result);
}

cosmosDbGremlinGraphGet().catch(console.error);
