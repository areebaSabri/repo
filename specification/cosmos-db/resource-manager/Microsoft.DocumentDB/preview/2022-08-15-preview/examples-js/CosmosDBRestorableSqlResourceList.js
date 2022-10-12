const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Return a list of database and container combo that exist on the account at the given timestamp and location. This helps in scenarios to validate what resources exist at given timestamp and location. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission.
 *
 * @summary Return a list of database and container combo that exist on the account at the given timestamp and location. This helps in scenarios to validate what resources exist at given timestamp and location. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBRestorableSqlResourceList.json
 */
async function cosmosDbRestorableSqlResourceList() {
  const subscriptionId = "2296c272-5d55-40d9-bc05-4d56dc2d7588";
  const location = "WestUS";
  const instanceId = "d9b26648-2f53-4541-b3d8-3044f4f9810d";
  const restoreLocation = "WestUS";
  const restoreTimestampInUtc = "06/01/2022 4:56";
  const options = {
    restoreLocation,
    restoreTimestampInUtc,
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.restorableSqlResources.list(location, instanceId, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

cosmosDbRestorableSqlResourceList().catch(console.error);
