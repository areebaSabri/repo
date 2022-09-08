const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update RUs per second of an Azure Cosmos DB Table
 *
 * @summary Update RUs per second of an Azure Cosmos DB Table
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBTableThroughputUpdate.json
 */
async function cosmosDbTableThroughputUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const tableName = "tableName";
  const updateThroughputParameters = {
    location: "West US",
    resource: { throughput: 400 },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.tableResources.beginUpdateTableThroughputAndWait(
    resourceGroupName,
    accountName,
    tableName,
    updateThroughputParameters
  );
  console.log(result);
}

cosmosDbTableThroughputUpdate().catch(console.error);
