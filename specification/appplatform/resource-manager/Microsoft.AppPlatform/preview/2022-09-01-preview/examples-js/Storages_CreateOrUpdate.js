const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update storage resource.
 *
 * @summary Create or update storage resource.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/Storages_CreateOrUpdate.json
 */
async function storagesCreateOrUpdate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const storageName = "mystorage";
  const storageResource = {
    properties: {
      accountKey: "account-key-of-storage-account",
      accountName: "storage-account-name",
      storageType: "StorageAccount",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.storages.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    storageName,
    storageResource
  );
  console.log(result);
}

storagesCreateOrUpdate().catch(console.error);
