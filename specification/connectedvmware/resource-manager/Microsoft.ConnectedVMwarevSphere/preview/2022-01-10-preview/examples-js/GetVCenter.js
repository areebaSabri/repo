const { AzureArcVMwareManagementServiceAPI } = require("@azure/arm-connectedvmware");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Implements vCenter GET method.
 *
 * @summary Implements vCenter GET method.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/GetVCenter.json
 */
async function getVCenter() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const vcenterName = "ContosoVCenter";
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential, subscriptionId);
  const result = await client.vCenters.get(resourceGroupName, vcenterName);
  console.log(result);
}

getVCenter().catch(console.error);
