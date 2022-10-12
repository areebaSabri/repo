const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Retrieve throughput distribution for an Azure Cosmos DB SQL container
 *
 * @summary Retrieve throughput distribution for an Azure Cosmos DB SQL container
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBSqlContainerRetrieveThroughputDistribution.json
 */
async function cosmosDbSqlContainerRetrieveThroughputDistribution() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const retrieveThroughputParameters = {
    resource: { physicalPartitionIds: [{ id: "0" }, { id: "1" }] },
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginSqlContainerRetrieveThroughputDistributionAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    containerName,
    retrieveThroughputParameters
  );
  console.log(result);
}

cosmosDbSqlContainerRetrieveThroughputDistribution().catch(console.error);
