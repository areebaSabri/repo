const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List of virtual machines in a private cloud cluster
 *
 * @summary List of virtual machines in a private cloud cluster
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/VirtualMachines_List.json
 */
async function listClusterVirtualMachines() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const clusterName = "cluster1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualMachines.list(
    resourceGroupName,
    privateCloudName,
    clusterName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listClusterVirtualMachines().catch(console.error);
