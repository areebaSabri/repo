const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to This can only be performed on Azure Virtual Machine Scale set backed clusters. Stopping a cluster stops the control plane and agent nodes entirely, while maintaining all object and cluster state. A cluster does not accrue charges while it is stopped. See [stopping a cluster](https://docs.microsoft.com/azure/aks/start-stop-cluster) for more details about stopping a cluster.
 *
 * @summary This can only be performed on Azure Virtual Machine Scale set backed clusters. Stopping a cluster stops the control plane and agent nodes entirely, while maintaining all object and cluster state. A cluster does not accrue charges while it is stopped. See [stopping a cluster](https://docs.microsoft.com/azure/aks/start-stop-cluster) for more details about stopping a cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/stable/2022-07-01/examples/ManagedClustersStop.json
 */
async function stopManagedCluster() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.managedClusters.beginStopAndWait(resourceGroupName, resourceName);
  console.log(result);
}

stopManagedCluster().catch(console.error);
