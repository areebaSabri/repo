const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes an existing Azure Cosmos DB MongoDB Collection.
 *
 * @summary Deletes an existing Azure Cosmos DB MongoDB Collection.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBMongoDBCollectionDelete.json
 */
async function cosmosDbMongoDbcollectionDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const collectionName = "collectionName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.beginDeleteMongoDBCollectionAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    collectionName
  );
  console.log(result);
}

cosmosDbMongoDbcollectionDelete().catch(console.error);
