const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the graphs under an existing Azure Cosmos DB database account.
 *
 * @summary Lists the graphs under an existing Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBGraphResourceList.json
 */
async function cosmosDbSqlDatabaseList() {
  const subscriptionId = "subid";
  const resourceGroupName = "rgName";
  const accountName = "ddb1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.graphResources.listGraphs(resourceGroupName, accountName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

cosmosDbSqlDatabaseList().catch(console.error);
