const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the Cassandra materialized views under an existing Azure Cosmos DB database account.
 *
 * @summary Lists the Cassandra materialized views under an existing Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBCassandraViewList.json
 */
async function cosmosDbCassandraViewList() {
  const subscriptionId = "subid";
  const resourceGroupName = "rgName";
  const accountName = "ddb1";
  const keyspaceName = "keyspacename";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.cassandraResources.listCassandraViews(
    resourceGroupName,
    accountName,
    keyspaceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

cosmosDbCassandraViewList().catch(console.error);
