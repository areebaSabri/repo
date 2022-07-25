const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes a specified agent pool resource.
 *
 * @summary Deletes a specified agent pool resource.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/AgentPoolsDelete.json
 */
async function agentPoolsDelete() {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const agentPoolName = "myAgentPool";
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.agentPools.beginDeleteAndWait(
    resourceGroupName,
    registryName,
    agentPoolName
  );
  console.log(result);
}

agentPoolsDelete().catch(console.error);
