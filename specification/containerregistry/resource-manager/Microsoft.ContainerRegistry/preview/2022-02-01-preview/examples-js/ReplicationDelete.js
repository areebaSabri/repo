const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes a replication from a container registry.
 *
 * @summary Deletes a replication from a container registry.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2022-02-01-preview/examples/ReplicationDelete.json
 */
async function replicationDelete() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const replicationName = "myReplication";
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.replications.beginDeleteAndWait(
    resourceGroupName,
    registryName,
    replicationName
  );
  console.log(result);
}

replicationDelete().catch(console.error);
