const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes an existing Azure Cosmos DB Mongo Role Definition.
 *
 * @summary Deletes an existing Azure Cosmos DB Mongo Role Definition.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBMongoDBRoleDefinitionDelete.json
 */
async function cosmosDbMongoDbroleDefinitionDelete() {
  const subscriptionId = "mySubscriptionId";
  const mongoRoleDefinitionId = "myMongoRoleDefinitionId";
  const resourceGroupName = "myResourceGroupName";
  const accountName = "myAccountName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.beginDeleteMongoRoleDefinitionAndWait(
    mongoRoleDefinitionId,
    resourceGroupName,
    accountName
  );
  console.log(result);
}

cosmosDbMongoDbroleDefinitionDelete().catch(console.error);
