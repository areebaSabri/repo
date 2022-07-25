const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes an existing Azure Cosmos DB SQL Role Definition.
 *
 * @summary Deletes an existing Azure Cosmos DB SQL Role Definition.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBSqlRoleDefinitionDelete.json
 */
async function cosmosDbSqlRoleDefinitionDelete() {
  const subscriptionId = "mySubscriptionId";
  const roleDefinitionId = "myRoleDefinitionId";
  const resourceGroupName = "myResourceGroupName";
  const accountName = "myAccountName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginDeleteSqlRoleDefinitionAndWait(
    roleDefinitionId,
    resourceGroupName,
    accountName
  );
  console.log(result);
}

cosmosDbSqlRoleDefinitionDelete().catch(console.error);
