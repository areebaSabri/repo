const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the RUs per second of the SQL database under an existing Azure Cosmos DB database account with the provided name.
 *
 * @summary Gets the RUs per second of the SQL database under an existing Azure Cosmos DB database account with the provided name.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBSqlDatabaseThroughputGet.json
 */
async function cosmosDbSqlDatabaseThroughputGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.getSqlDatabaseThroughput(
    resourceGroupName,
    accountName,
    databaseName
  );
  console.log(result);
}

cosmosDbSqlDatabaseThroughputGet().catch(console.error);
