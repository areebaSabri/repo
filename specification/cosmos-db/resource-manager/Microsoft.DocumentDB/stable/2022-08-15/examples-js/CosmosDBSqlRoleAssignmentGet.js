const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Retrieves the properties of an existing Azure Cosmos DB SQL Role Assignment with the given Id.
 *
 * @summary Retrieves the properties of an existing Azure Cosmos DB SQL Role Assignment with the given Id.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBSqlRoleAssignmentGet.json
 */
async function cosmosDbSqlRoleAssignmentGet() {
  const subscriptionId = "mySubscriptionId";
  const roleAssignmentId = "myRoleAssignmentId";
  const resourceGroupName = "myResourceGroupName";
  const accountName = "myAccountName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.getSqlRoleAssignment(
    roleAssignmentId,
    resourceGroupName,
    accountName
  );
  console.log(result);
}

cosmosDbSqlRoleAssignmentGet().catch(console.error);
