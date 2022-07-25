const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes an existing Azure Cosmos DB SQL container.
 *
 * @summary Deletes an existing Azure Cosmos DB SQL container.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBSqlContainerDelete.json
 */
async function cosmosDbSqlContainerDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginDeleteSqlContainerAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    containerName
  );
  console.log(result);
}

cosmosDbSqlContainerDelete().catch(console.error);
