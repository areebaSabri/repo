const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates an Azure Cosmos DB Mongo Role Definition.
 *
 * @summary Creates or updates an Azure Cosmos DB Mongo Role Definition.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBMongoDBRoleDefinitionCreateUpdate.json
 */
async function cosmosDbMongoDbroleDefinitionCreateUpdate() {
  const subscriptionId = "mySubscriptionId";
  const mongoRoleDefinitionId = "myMongoRoleDefinitionId";
  const resourceGroupName = "myResourceGroupName";
  const accountName = "myAccountName";
  const createUpdateMongoRoleDefinitionParameters = {
    databaseName: "sales",
    privileges: [
      {
        actions: ["insert", "find"],
        resource: { collection: "sales", db: "sales" },
      },
    ],
    roleName: "myRoleName",
    roles: [{ db: "sales", role: "myInheritedRole" }],
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.beginCreateUpdateMongoRoleDefinitionAndWait(
    mongoRoleDefinitionId,
    resourceGroupName,
    accountName,
    createUpdateMongoRoleDefinitionParameters
  );
  console.log(result);
}

cosmosDbMongoDbroleDefinitionCreateUpdate().catch(console.error);
