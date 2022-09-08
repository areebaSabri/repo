const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Retrieves the metrics determined by the given filter for the given database account, collection and region.
 *
 * @summary Retrieves the metrics determined by the given filter for the given database account, collection and region.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBRegionCollectionGetMetrics.json
 */
async function cosmosDbRegionCollectionGetMetrics() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const region = "North Europe";
  const databaseRid = "databaseRid";
  const collectionRid = "collectionRid";
  const filter =
    "$filter=(name.value eq 'Total Requests') and timeGrain eq duration'PT5M' and startTime eq '2017-11-19T23:53:55.2780000Z' and endTime eq '2017-11-20T00:13:55.2780000Z";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.collectionRegion.listMetrics(
    resourceGroupName,
    accountName,
    region,
    databaseRid,
    collectionRid,
    filter
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

cosmosDbRegionCollectionGetMetrics().catch(console.error);
