const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates an Azure Cosmos DB SQL Role Assignment.
 *
 * @summary Creates or updates an Azure Cosmos DB SQL Role Assignment.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBSqlRoleAssignmentCreateUpdate.json
 */
async function cosmosDbSqlRoleAssignmentCreateUpdate() {
  const subscriptionId = "mySubscriptionId";
  const roleAssignmentId = "myRoleAssignmentId";
  const resourceGroupName = "myResourceGroupName";
  const accountName = "myAccountName";
  const createUpdateSqlRoleAssignmentParameters = {
    principalId: "myPrincipalId",
    roleDefinitionId:
      "/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/sqlRoleDefinitions/myRoleDefinitionId",
    scope:
      "/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/dbs/purchases/colls/redmond-purchases",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateSqlRoleAssignmentAndWait(
    roleAssignmentId,
    resourceGroupName,
    accountName,
    createUpdateSqlRoleAssignmentParameters
  );
  console.log(result);
}

cosmosDbSqlRoleAssignmentCreateUpdate().catch(console.error);
