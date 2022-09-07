const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the SQL storedProcedure under an existing Azure Cosmos DB database account.
 *
 * @summary Gets the SQL storedProcedure under an existing Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBSqlStoredProcedureGet.json
 */
async function cosmosDbSqlStoredProcedureGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rgName";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const storedProcedureName = "storedProcedureName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.getSqlStoredProcedure(
    resourceGroupName,
    accountName,
    databaseName,
    containerName,
    storedProcedureName
  );
  console.log(result);
}

cosmosDbSqlStoredProcedureGet().catch(console.error);
