const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the RUs per second of the Cassandra view under an existing Azure Cosmos DB database account with the provided name.
 *
 * @summary Gets the RUs per second of the Cassandra view under an existing Azure Cosmos DB database account with the provided name.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBCassandraViewThroughputGet.json
 */
async function cosmosDbCassandraViewThroughputGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspacename";
  const viewName = "viewname";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraResources.getCassandraViewThroughput(
    resourceGroupName,
    accountName,
    keyspaceName,
    viewName
  );
  console.log(result);
}

cosmosDbCassandraViewThroughputGet().catch(console.error);
