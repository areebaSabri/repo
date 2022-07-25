const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the count of queued runs for a given agent pool.
 *
 * @summary Gets the count of queued runs for a given agent pool.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/AgentPoolsGetQueueStatus.json
 */
async function agentPoolsGetQueueStatus() {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const agentPoolName = "myAgentPool";
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.agentPools.getQueueStatus(
    resourceGroupName,
    registryName,
    agentPoolName
  );
  console.log(result);
}

agentPoolsGetQueueStatus().catch(console.error);
