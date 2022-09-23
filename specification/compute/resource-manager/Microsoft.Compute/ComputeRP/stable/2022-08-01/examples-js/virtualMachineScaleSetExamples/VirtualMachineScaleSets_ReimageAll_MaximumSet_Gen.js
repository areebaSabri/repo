const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This operation is only supported for managed disks.
 *
 * @summary Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This operation is only supported for managed disks.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSets_ReimageAll_MaximumSet_Gen.json
 */
async function virtualMachineScaleSetsReimageAllMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaa";
  const vmInstanceIDs = {
    instanceIds: ["aaaaaaaaaaaaaaaaa"],
  };
  const options = {
    vmInstanceIDs,
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginReimageAllAndWait(
    resourceGroupName,
    vmScaleSetName,
    options
  );
  console.log(result);
}

virtualMachineScaleSetsReimageAllMaximumSetGen().catch(console.error);
