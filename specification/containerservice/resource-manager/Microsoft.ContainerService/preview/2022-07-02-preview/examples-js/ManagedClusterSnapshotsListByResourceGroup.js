const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists managed cluster snapshots in the specified subscription and resource group.
 *
 * @summary Lists managed cluster snapshots in the specified subscription and resource group.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/ManagedClusterSnapshotsListByResourceGroup.json
 */
async function listManagedClusterSnapshotsByResourceGroup() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedClusterSnapshots.listByResourceGroup(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listManagedClusterSnapshotsByResourceGroup().catch(console.error);
