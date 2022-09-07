const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Online the specified region for the specified Azure Cosmos DB database account.
 *
 * @summary Online the specified region for the specified Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBDatabaseAccountOnlineRegion.json
 */
async function cosmosDbDatabaseAccountOnlineRegion() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const regionParameterForOnline = {
    region: "",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.beginOnlineRegionAndWait(
    resourceGroupName,
    accountName,
    regionParameterForOnline
  );
  console.log(result);
}

cosmosDbDatabaseAccountOnlineRegion().catch(console.error);
