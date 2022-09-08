const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB SQL storedProcedure
 *
 * @summary Create or update an Azure Cosmos DB SQL storedProcedure
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBSqlStoredProcedureCreateUpdate.json
 */
async function cosmosDbSqlStoredProcedureCreateUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const storedProcedureName = "storedProcedureName";
  const createUpdateSqlStoredProcedureParameters = {
    options: {},
    resource: { body: "body", id: "storedProcedureName" },
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateSqlStoredProcedureAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    containerName,
    storedProcedureName,
    createUpdateSqlStoredProcedureParameters
  );
  console.log(result);
}

cosmosDbSqlStoredProcedureCreateUpdate().catch(console.error);
