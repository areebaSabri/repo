const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists snapshots under a resource group.
 *
 * @summary Lists snapshots under a resource group.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2022-07-02/examples/snapshotExamples/Snapshot_ListByResourceGroup.json
 */
async function listAllSnapshotsInAResourceGroup() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.snapshots.listByResourceGroup(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllSnapshotsInAResourceGroup().catch(console.error);
