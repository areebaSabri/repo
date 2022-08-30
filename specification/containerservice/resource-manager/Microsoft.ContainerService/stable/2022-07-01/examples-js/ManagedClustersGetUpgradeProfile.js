const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the upgrade profile of a managed cluster.
 *
 * @summary Gets the upgrade profile of a managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/stable/2022-07-01/examples/ManagedClustersGetUpgradeProfile.json
 */
async function getUpgradeProfileForManagedCluster() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.managedClusters.getUpgradeProfile(resourceGroupName, resourceName);
  console.log(result);
}

getUpgradeProfileForManagedCluster().catch(console.error);
