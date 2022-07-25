const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the SQL userDefinedFunction under an existing Azure Cosmos DB database account.
 *
 * @summary Gets the SQL userDefinedFunction under an existing Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBSqlUserDefinedFunctionGet.json
 */
async function cosmosDbSqlUserDefinedFunctionGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rgName";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const userDefinedFunctionName = "userDefinedFunctionName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.getSqlUserDefinedFunction(
    resourceGroupName,
    accountName,
    databaseName,
    containerName,
    userDefinedFunctionName
  );
  console.log(result);
}

cosmosDbSqlUserDefinedFunctionGet().catch(console.error);
