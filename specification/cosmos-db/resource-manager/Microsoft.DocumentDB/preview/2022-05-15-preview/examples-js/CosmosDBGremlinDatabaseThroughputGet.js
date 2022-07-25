const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the RUs per second of the Gremlin database under an existing Azure Cosmos DB database account with the provided name.
 *
 * @summary Gets the RUs per second of the Gremlin database under an existing Azure Cosmos DB database account with the provided name.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBGremlinDatabaseThroughputGet.json
 */
async function cosmosDbGremlinDatabaseThroughputGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.gremlinResources.getGremlinDatabaseThroughput(
    resourceGroupName,
    accountName,
    databaseName
  );
  console.log(result);
}

cosmosDbGremlinDatabaseThroughputGet().catch(console.error);
