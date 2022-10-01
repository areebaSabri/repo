const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get an addon by name in a private cloud
 *
 * @summary Get an addon by name in a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/Addons_Get_HCX.json
 */
async function addonsGetHcx() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const addonName = "hcx";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.addons.get(resourceGroupName, privateCloudName, addonName);
  console.log(result);
}

addonsGetHcx().catch(console.error);
