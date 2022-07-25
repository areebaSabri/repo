const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update RUs per second of an Azure Cosmos DB Gremlin graph
 *
 * @summary Update RUs per second of an Azure Cosmos DB Gremlin graph
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBGremlinGraphThroughputUpdate.json
 */
async function cosmosDbGremlinGraphThroughputUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const graphName = "graphName";
  const updateThroughputParameters = {
    location: "West US",
    resource: { throughput: 400 },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.gremlinResources.beginUpdateGremlinGraphThroughputAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    graphName,
    updateThroughputParameters
  );
  console.log(result);
}

cosmosDbGremlinGraphThroughputUpdate().catch(console.error);
