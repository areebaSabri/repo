const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the read-only access keys for the specified Azure Cosmos DB database account.
 *
 * @summary Lists the read-only access keys for the specified Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBDatabaseAccountListReadOnlyKeys.json
 */
async function cosmosDbDatabaseAccountListReadOnlyKeys() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.getReadOnlyKeys(resourceGroupName, accountName);
  console.log(result);
}

cosmosDbDatabaseAccountListReadOnlyKeys().catch(console.error);
