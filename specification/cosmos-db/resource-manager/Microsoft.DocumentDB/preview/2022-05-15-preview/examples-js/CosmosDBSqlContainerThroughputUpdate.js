const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update RUs per second of an Azure Cosmos DB SQL container
 *
 * @summary Update RUs per second of an Azure Cosmos DB SQL container
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBSqlContainerThroughputUpdate.json
 */
async function cosmosDbSqlContainerThroughputUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const updateThroughputParameters = {
    location: "West US",
    resource: { throughput: 400 },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginUpdateSqlContainerThroughputAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    containerName,
    updateThroughputParameters
  );
  console.log(result);
}

cosmosDbSqlContainerThroughputUpdate().catch(console.error);
