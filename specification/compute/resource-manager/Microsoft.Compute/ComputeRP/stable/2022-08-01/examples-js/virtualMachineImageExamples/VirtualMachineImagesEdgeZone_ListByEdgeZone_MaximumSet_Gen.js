const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a list of all virtual machine image versions for the specified edge zone
 *
 * @summary Gets a list of all virtual machine image versions for the specified edge zone
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/virtualMachineImageExamples/VirtualMachineImagesEdgeZone_ListByEdgeZone_MaximumSet_Gen.json
 */
async function virtualMachineImagesEdgeZoneListByEdgeZoneMaximumSetGen() {
  const subscriptionId = "5ece5940-d962-4dad-a98f-ca9ac0f021a5";
  const location = "WestUS";
  const edgeZone = "microsoftlosangeles1";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImages.listByEdgeZone(location, edgeZone);
  console.log(result);
}

virtualMachineImagesEdgeZoneListByEdgeZoneMaximumSetGen().catch(console.error);
