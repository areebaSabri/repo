const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the properties of the specified replication.
 *
 * @summary Gets the properties of the specified replication.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2022-02-01-preview/examples/ReplicationGet.json
 */
async function replicationGet() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const replicationName = "myReplication";
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.replications.get(resourceGroupName, registryName, replicationName);
  console.log(result);
}

replicationGet().catch(console.error);
