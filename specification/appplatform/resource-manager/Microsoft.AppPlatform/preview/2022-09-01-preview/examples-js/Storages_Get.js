const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the storage resource.
 *
 * @summary Get the storage resource.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/Storages_Get.json
 */
async function storagesGet() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const storageName = "mystorage";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.storages.get(resourceGroupName, serviceName, storageName);
  console.log(result);
}

storagesGet().catch(console.error);
