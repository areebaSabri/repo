const { AzureArcVMwareManagementServiceAPI } = require("@azure/arm-connectedvmware");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Implements virtual machine template GET method.
 *
 * @summary Implements virtual machine template GET method.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/GetVirtualMachineTemplate.json
 */
async function getVirtualMachineTemplate() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const virtualMachineTemplateName = "WebFrontEndTemplate";
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential, subscriptionId);
  const result = await client.virtualMachineTemplates.get(
    resourceGroupName,
    virtualMachineTemplateName
  );
  console.log(result);
}

getVirtualMachineTemplate().catch(console.error);
