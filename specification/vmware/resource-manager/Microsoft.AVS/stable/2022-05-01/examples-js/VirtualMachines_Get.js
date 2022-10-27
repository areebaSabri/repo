const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a virtual machine by id in a private cloud cluster
 *
 * @summary Get a virtual machine by id in a private cloud cluster
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2022-05-01/examples/VirtualMachines_Get.json
 */
async function getVirtualMachine() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const clusterName = "cluster1";
  const virtualMachineId = "vm-209";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.virtualMachines.get(
    resourceGroupName,
    privateCloudName,
    clusterName,
    virtualMachineId
  );
  console.log(result);
}

getVirtualMachine().catch(console.error);
