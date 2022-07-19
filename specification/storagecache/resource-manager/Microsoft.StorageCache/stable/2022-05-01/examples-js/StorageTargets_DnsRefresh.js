const { StorageCacheManagementClient } = require("@azure/arm-storagecache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Tells a storage target to refresh its DNS information.
 *
 * @summary Tells a storage target to refresh its DNS information.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2022-05-01/examples/StorageTargets_DnsRefresh.json
 */
async function cachesDnsRefresh() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "scgroup";
  const cacheName = "sc";
  const storageTargetName = "st1";
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.storageTargets.beginDnsRefreshAndWait(
    resourceGroupName,
    cacheName,
    storageTargetName
  );
  console.log(result);
}

cachesDnsRefresh().catch(console.error);
