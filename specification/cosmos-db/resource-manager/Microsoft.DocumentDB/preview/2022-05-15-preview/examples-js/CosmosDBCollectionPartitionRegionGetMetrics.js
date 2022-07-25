const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Retrieves the metrics determined by the given filter for the given collection and region, split by partition.
 *
 * @summary Retrieves the metrics determined by the given filter for the given collection and region, split by partition.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-05-15-preview/examples/CosmosDBCollectionPartitionRegionGetMetrics.json
 */
async function cosmosDbDatabaseAccountRegionGetMetrics() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const region = "North Europe";
  const databaseRid = "databaseRid";
  const collectionRid = "collectionRid";
  const filter =
    "$filter=(name.value eq 'Max RUs Per Second') and timeGrain eq duration'PT1M' and startTime eq '2017-11-19T23:53:55.2780000Z' and endTime eq '2017-11-20T23:58:55.2780000Z";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.collectionPartitionRegion.listMetrics(
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

cosmosDbDatabaseAccountRegionGetMetrics().catch(console.error);
