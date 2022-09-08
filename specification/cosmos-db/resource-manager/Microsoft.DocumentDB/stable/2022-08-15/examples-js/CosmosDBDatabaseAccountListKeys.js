const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the access keys for the specified Azure Cosmos DB database account.
 *
 * @summary Lists the access keys for the specified Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBDatabaseAccountListKeys.json
 */
async function cosmosDbDatabaseAccountListKeys() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.listKeys(resourceGroupName, accountName);
  console.log(result);
}

cosmosDbDatabaseAccountListKeys().catch(console.error);
