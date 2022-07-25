const { ResourceGraphClient } = require("@azure/arm-resourcegraph");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List all snapshots of a resource for a given time interval.
 *
 * @summary List all snapshots of a resource for a given time interval.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesHistoryGet.json
 */
async function resourceHistoryQuery() {
  const request = {
    options: {
      interval: {
        end: new Date("2020-11-12T01:25:00.0000000Z"),
        start: new Date("2020-11-12T01:00:00.0000000Z"),
      },
    },
    query: "where name =~ 'cpu-utilization' | project id, name, properties",
    subscriptions: ["a7f33fdb-e646-4f15-89aa-3a360210861e"],
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resourcesHistory(request);
  console.log(result);
}

resourceHistoryQuery().catch(console.error);
