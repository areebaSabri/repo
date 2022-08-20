const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a managed cluster snapshot.
 *
 * @summary Creates or updates a managed cluster snapshot.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/ManagedClusterSnapshotsCreate.json
 */
async function createOrUpdateManagedClusterSnapshot() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "snapshot1";
  const parameters = {
    creationData: {
      sourceResourceId:
        "/subscriptions/subid1/resourcegroups/rg1/providers/Microsoft.ContainerService/managedClusters/cluster1",
    },
    location: "westus",
    tags: { key1: "val1", key2: "val2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.managedClusterSnapshots.createOrUpdate(
    resourceGroupName,
    resourceName,
    parameters
  );
  console.log(result);
}

createOrUpdateManagedClusterSnapshot().catch(console.error);
