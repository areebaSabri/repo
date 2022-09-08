const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates an Azure Cosmos DB SQL Role Definition.
 *
 * @summary Creates or updates an Azure Cosmos DB SQL Role Definition.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBSqlRoleDefinitionCreateUpdate.json
 */
async function cosmosDbSqlRoleDefinitionCreateUpdate() {
  const subscriptionId = "mySubscriptionId";
  const roleDefinitionId = "myRoleDefinitionId";
  const resourceGroupName = "myResourceGroupName";
  const accountName = "myAccountName";
  const createUpdateSqlRoleDefinitionParameters = {
    type: "CustomRole",
    assignableScopes: [
      "/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/dbs/sales",
      "/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/dbs/purchases",
    ],
    permissions: [
      {
        dataActions: [
          "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/create",
          "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/read",
        ],
        notDataActions: [],
      },
    ],
    roleName: "myRoleName",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateSqlRoleDefinitionAndWait(
    roleDefinitionId,
    resourceGroupName,
    accountName,
    createUpdateSqlRoleDefinitionParameters
  );
  console.log(result);
}

cosmosDbSqlRoleDefinitionCreateUpdate().catch(console.error);
