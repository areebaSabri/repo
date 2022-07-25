const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Changes the failover priority for the Azure Cosmos DB database account. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
 *
 * @summary Changes the failover priority for the Azure Cosmos DB database account. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBDatabaseAccountFailoverPriorityChange.json
 */
async function cosmosDbDatabaseAccountFailoverPriorityChange() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1-failover";
  const failoverParameters = {
    failoverPolicies: [
      { failoverPriority: 0, locationName: "eastus" },
      { failoverPriority: 1, locationName: "westus" },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.beginFailoverPriorityChangeAndWait(
    resourceGroupName,
    accountName,
    failoverParameters
  );
  console.log(result);
}

cosmosDbDatabaseAccountFailoverPriorityChange().catch(console.error);
