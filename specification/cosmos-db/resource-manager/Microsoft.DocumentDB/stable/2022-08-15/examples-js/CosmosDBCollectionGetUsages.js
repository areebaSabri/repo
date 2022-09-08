const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Retrieves the usages (most recent storage data) for the given collection.
 *
 * @summary Retrieves the usages (most recent storage data) for the given collection.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBCollectionGetUsages.json
 */
async function cosmosDbCollectionGetUsages() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseRid = "databaseRid";
  const collectionRid = "collectionRid";
  const filter = "$filter=name.value eq 'Storage'";
  const options = { filter };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.collection.listUsages(
    resourceGroupName,
    accountName,
    databaseRid,
    collectionRid,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

cosmosDbCollectionGetUsages().catch(console.error);
