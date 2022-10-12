const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Retrieves the usages (most recent data) for the given database account.
 *
 * @summary Retrieves the usages (most recent data) for the given database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBDatabaseAccountGetUsages.json
 */
async function cosmosDbDatabaseAccountGetUsages() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const filter = "$filter=name.value eq 'Storage'";
  const options = { filter };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.databaseAccounts.listUsages(
    resourceGroupName,
    accountName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

cosmosDbDatabaseAccountGetUsages().catch(console.error);
