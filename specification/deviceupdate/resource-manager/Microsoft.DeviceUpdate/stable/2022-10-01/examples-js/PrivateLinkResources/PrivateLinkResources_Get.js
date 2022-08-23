const { DeviceUpdate } = require("@azure/arm-deviceupdate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the specified private link resource associated with the device update account.
 *
 * @summary Get the specified private link resource associated with the device update account.
 * x-ms-original-file: specification/deviceupdate/resource-manager/Microsoft.DeviceUpdate/stable/2022-10-01/examples/PrivateLinkResources/PrivateLinkResources_Get.json
 */
async function privateLinkResourcesGet() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "test-rg";
  const accountName = "contoso";
  const groupId = "adu";
  const credential = new DefaultAzureCredential();
  const client = new DeviceUpdate(credential, subscriptionId);
  const result = await client.privateLinkResources.get(resourceGroupName, accountName, groupId);
  console.log(result);
}

privateLinkResourcesGet().catch(console.error);
