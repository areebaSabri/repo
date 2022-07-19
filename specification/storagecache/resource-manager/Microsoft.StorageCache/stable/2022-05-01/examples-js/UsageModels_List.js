const { StorageCacheManagementClient } = require("@azure/arm-storagecache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the list of Cache Usage Models available to this subscription.
 *
 * @summary Get the list of Cache Usage Models available to this subscription.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2022-05-01/examples/UsageModels_List.json
 */
async function usageModelsList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.usageModels.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

usageModelsList().catch(console.error);
