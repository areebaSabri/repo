const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the SQL databases under an existing Azure Cosmos DB database account.
 *
 * @summary Lists the SQL databases under an existing Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-05-15/examples/CosmosDBSqlDatabaseList.json
 */
async function cosmosDbSqlDatabaseList() {
  const subscriptionId = "subid";
  const resourceGroupName = "rgName";
  const accountName = "ddb1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.sqlResources.listSqlDatabases(resourceGroupName, accountName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

cosmosDbSqlDatabaseList().catch(console.error);
