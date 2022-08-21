const { AzureArcVMwareManagementServiceAPI } = require("@azure/arm-connectedvmware");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create Or Update virtual machine.
 *
 * @summary Create Or Update virtual machine.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/CreateVirtualMachine.json
 */
async function createVirtualMachine() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const virtualMachineName = "DemoVM";
  const body = {
    extendedLocation: {
      name: "/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso",
      type: "customLocation",
    },
    hardwareProfile: { memorySizeMB: 4196, numCPUs: 4 },
    location: "East US",
    resourcePoolId:
      "/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/ResourcePools/HRPool",
    templateId:
      "/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VirtualMachineTemplates/WebFrontEndTemplate",
    vCenterId:
      "/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VCenters/ContosoVCenter",
  };
  const options = { body };
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential, subscriptionId);
  const result = await client.virtualMachines.beginCreateAndWait(
    resourceGroupName,
    virtualMachineName,
    options
  );
  console.log(result);
}

createVirtualMachine().catch(console.error);
