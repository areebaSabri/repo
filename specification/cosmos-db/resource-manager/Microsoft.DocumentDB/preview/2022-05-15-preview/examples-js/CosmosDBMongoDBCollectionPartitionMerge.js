const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Merges the partitions of a MongoDB Collection
 *
 * @summary Merges the partitions of a MongoDB Collection
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBMongoDBCollectionPartitionMerge.json
 */
async function cosmosDbMongoDbcollectionPartitionMerge() {
  const subscriptionId = "subid";
  const resourceGroupName = "rgName";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const collectionName = "collectionName";
  const mergeParameters = { isDryRun: false };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.beginListMongoDBCollectionPartitionMergeAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    collectionName,
    mergeParameters
  );
  console.log(result);
}

cosmosDbMongoDbcollectionPartitionMerge().catch(console.error);
