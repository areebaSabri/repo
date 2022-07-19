const { StorageCacheManagementClient } = require("@azure/arm-storagecache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Schedule a priming job for deletion.
 *
 * @summary Schedule a priming job for deletion.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2022-05-01/examples/StopPrimingJob.json
 */
async function stopPrimingJob() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "scgroup";
  const cacheName = "sc1";
  const primingJobId = {
    primingJobId: "00000000000_0000000000",
  };
  const options = { primingJobId };
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.caches.beginStopPrimingJobAndWait(
    resourceGroupName,
    cacheName,
    options
  );
  console.log(result);
}

stopPrimingJob().catch(console.error);
