const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB SQL database
 *
 * @summary Create or update an Azure Cosmos DB SQL database
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-05-15/examples/CosmosDBSqlDatabaseCreateUpdate.json
 */
async function cosmosDbSqlDatabaseCreateUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const createUpdateSqlDatabaseParameters = {
    location: "West US",
    options: {},
    resource: { id: "databaseName" },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateSqlDatabaseAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    createUpdateSqlDatabaseParameters
  );
  console.log(result);
}

cosmosDbSqlDatabaseCreateUpdate().catch(console.error);
