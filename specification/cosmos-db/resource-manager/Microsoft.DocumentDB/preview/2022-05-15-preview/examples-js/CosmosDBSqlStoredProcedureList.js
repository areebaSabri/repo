const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the SQL storedProcedure under an existing Azure Cosmos DB database account.
 *
 * @summary Lists the SQL storedProcedure under an existing Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBSqlStoredProcedureList.json
 */
async function cosmosDbSqlStoredProcedureList() {
  const subscriptionId = "subid";
  const resourceGroupName = "rgName";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.sqlResources.listSqlStoredProcedures(
    resourceGroupName,
    accountName,
    databaseName,
    containerName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

cosmosDbSqlStoredProcedureList().catch(console.error);
