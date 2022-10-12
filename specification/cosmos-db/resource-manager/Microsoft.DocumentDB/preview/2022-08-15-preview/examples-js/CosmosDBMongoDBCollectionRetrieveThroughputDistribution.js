const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Retrieve throughput distribution for an Azure Cosmos DB MongoDB container
 *
 * @summary Retrieve throughput distribution for an Azure Cosmos DB MongoDB container
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBMongoDBCollectionRetrieveThroughputDistribution.json
 */
async function cosmosDbMongoDbcollectionRetrieveThroughputDistribution() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const collectionName = "collectionName";
  const retrieveThroughputParameters = {
    resource: { physicalPartitionIds: [{ id: "0" }, { id: "1" }] },
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.mongoDBResources.beginMongoDBContainerRetrieveThroughputDistributionAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      collectionName,
      retrieveThroughputParameters
    );
  console.log(result);
}

cosmosDbMongoDbcollectionRetrieveThroughputDistribution().catch(console.error);
