const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists all the disks under a subscription.
 *
 * @summary Lists all the disks under a subscription.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2022-07-02/examples/diskExamples/Disk_ListBySubscription.json
 */
async function listAllManagedDisksInASubscription() {
  const subscriptionId = "{subscription-id}";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.disks.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllManagedDisksInASubscription().catch(console.error);
