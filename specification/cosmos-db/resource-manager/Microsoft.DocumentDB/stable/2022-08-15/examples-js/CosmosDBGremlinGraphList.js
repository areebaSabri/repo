const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the Gremlin graph under an existing Azure Cosmos DB database account.
 *
 * @summary Lists the Gremlin graph under an existing Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBGremlinGraphList.json
 */
async function cosmosDbGremlinGraphList() {
  const subscriptionId = "subid";
  const resourceGroupName = "rgName";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.gremlinResources.listGremlinGraphs(
    resourceGroupName,
    accountName,
    databaseName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

cosmosDbGremlinGraphList().catch(console.error);
