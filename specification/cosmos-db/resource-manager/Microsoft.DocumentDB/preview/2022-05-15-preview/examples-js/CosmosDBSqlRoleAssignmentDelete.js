const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes an existing Azure Cosmos DB SQL Role Assignment.
 *
 * @summary Deletes an existing Azure Cosmos DB SQL Role Assignment.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBSqlRoleAssignmentDelete.json
 */
async function cosmosDbSqlRoleAssignmentDelete() {
  const subscriptionId = "mySubscriptionId";
  const roleAssignmentId = "myRoleAssignmentId";
  const resourceGroupName = "myResourceGroupName";
  const accountName = "myAccountName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginDeleteSqlRoleAssignmentAndWait(
    roleAssignmentId,
    resourceGroupName,
    accountName
  );
  console.log(result);
}

cosmosDbSqlRoleAssignmentDelete().catch(console.error);
