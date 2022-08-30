const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a list of agent pools in the specified managed cluster.
 *
 * @summary Gets a list of agent pools in the specified managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/stable/2022-07-01/examples/AgentPoolsList.json
 */
async function listAgentPoolsByManagedCluster() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.agentPools.list(resourceGroupName, resourceName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAgentPoolsByManagedCluster().catch(console.error);
