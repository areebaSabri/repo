const { AzureArcVMwareManagementServiceAPI } = require("@azure/arm-connectedvmware");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Implements GuestAgent DELETE method.
 *
 * @summary Implements GuestAgent DELETE method.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/DeleteGuestAgent.json
 */
async function deleteGuestAgent() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const virtualMachineName = "ContosoVm";
  const name = "default";
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential, subscriptionId);
  const result = await client.guestAgents.beginDeleteAndWait(
    resourceGroupName,
    virtualMachineName,
    name
  );
  console.log(result);
}

deleteGuestAgent().catch(console.error);
