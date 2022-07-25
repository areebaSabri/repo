const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update RUs per second of the an Azure Cosmos DB MongoDB database
 *
 * @summary Update RUs per second of the an Azure Cosmos DB MongoDB database
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBMongoDBDatabaseThroughputUpdate.json
 */
async function cosmosDbMongoDbdatabaseThroughputUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const updateThroughputParameters = {
    location: "West US",
    resource: { throughput: 400 },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.beginUpdateMongoDBDatabaseThroughputAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    updateThroughputParameters
  );
  console.log(result);
}

cosmosDbMongoDbdatabaseThroughputUpdate().catch(console.error);
