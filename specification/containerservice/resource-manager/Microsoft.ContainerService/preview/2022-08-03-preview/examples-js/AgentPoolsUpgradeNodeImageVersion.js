const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Upgrading the node image version of an agent pool applies the newest OS and runtime updates to the nodes. AKS provides one new image per week with the latest updates. For more details on node image versions, see: https://docs.microsoft.com/azure/aks/node-image-upgrade
 *
 * @summary Upgrading the node image version of an agent pool applies the newest OS and runtime updates to the nodes. AKS provides one new image per week with the latest updates. For more details on node image versions, see: https://docs.microsoft.com/azure/aks/node-image-upgrade
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-08-03-preview/examples/AgentPoolsUpgradeNodeImageVersion.json
 */
async function upgradeAgentPoolNodeImageVersion() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginUpgradeNodeImageVersionAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName
  );
  console.log(result);
}

upgradeAgentPoolNodeImageVersion().catch(console.error);
