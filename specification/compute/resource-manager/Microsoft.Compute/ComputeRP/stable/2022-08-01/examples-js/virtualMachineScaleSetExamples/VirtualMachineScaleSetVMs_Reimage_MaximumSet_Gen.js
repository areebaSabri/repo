const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
 *
 * @summary Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSetVMs_Reimage_MaximumSet_Gen.json
 */
async function virtualMachineScaleSetVMSReimageMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaaaa";
  const instanceId = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const vmScaleSetVMReimageInput = {
    tempDisk: true,
  };
  const options = {
    vmScaleSetVMReimageInput,
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetVMs.beginReimageAndWait(
    resourceGroupName,
    vmScaleSetName,
    instanceId,
    options
  );
  console.log(result);
}

virtualMachineScaleSetVMSReimageMaximumSetGen().catch(console.error);
