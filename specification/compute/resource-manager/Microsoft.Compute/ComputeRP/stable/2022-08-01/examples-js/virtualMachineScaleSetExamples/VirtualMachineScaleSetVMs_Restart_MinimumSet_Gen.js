const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Restarts a virtual machine in a VM scale set.
 *
 * @summary Restarts a virtual machine in a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSetVMs_Restart_MinimumSet_Gen.json
 */
async function virtualMachineScaleSetVMSRestartMinimumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaa";
  const instanceId = "aaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetVMs.beginRestartAndWait(
    resourceGroupName,
    vmScaleSetName,
    instanceId
  );
  console.log(result);
}

virtualMachineScaleSetVMSRestartMinimumSetGen().catch(console.error);
