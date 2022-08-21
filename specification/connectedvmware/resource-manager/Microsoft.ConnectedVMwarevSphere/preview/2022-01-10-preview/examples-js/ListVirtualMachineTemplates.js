const { AzureArcVMwareManagementServiceAPI } = require("@azure/arm-connectedvmware");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List of virtualMachineTemplates in a subscription.
 *
 * @summary List of virtualMachineTemplates in a subscription.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/ListVirtualMachineTemplates.json
 */
async function listVirtualMachineTemplates() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualMachineTemplates.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listVirtualMachineTemplates().catch(console.error);
