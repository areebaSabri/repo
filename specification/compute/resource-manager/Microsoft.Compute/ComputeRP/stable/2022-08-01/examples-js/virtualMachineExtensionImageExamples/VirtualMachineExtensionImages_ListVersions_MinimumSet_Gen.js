const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a list of virtual machine extension image versions.
 *
 * @summary Gets a list of virtual machine extension image versions.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/virtualMachineExtensionImageExamples/VirtualMachineExtensionImages_ListVersions_MinimumSet_Gen.json
 */
async function virtualMachineExtensionImagesListVersionsMinimumSetGen() {
  const subscriptionId = "{subscription-id}";
  const location = "aaaaaaaaa";
  const publisherName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const typeParam = "aaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineExtensionImages.listVersions(
    location,
    publisherName,
    typeParam
  );
  console.log(result);
}

virtualMachineExtensionImagesListVersionsMinimumSetGen().catch(console.error);
