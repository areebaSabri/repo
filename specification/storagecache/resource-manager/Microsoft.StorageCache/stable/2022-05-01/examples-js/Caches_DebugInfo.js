const { StorageCacheManagementClient } = require("@azure/arm-storagecache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Tells a Cache to write generate debug info for support to process.
 *
 * @summary Tells a Cache to write generate debug info for support to process.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2022-05-01/examples/Caches_DebugInfo.json
 */
async function cachesDebugInfo() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "scgroup";
  const cacheName = "sc";
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.caches.beginDebugInfoAndWait(resourceGroupName, cacheName);
  console.log(result);
}

cachesDebugInfo().catch(console.error);
