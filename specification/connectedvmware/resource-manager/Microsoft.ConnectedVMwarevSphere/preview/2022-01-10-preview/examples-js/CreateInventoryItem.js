const { AzureArcVMwareManagementServiceAPI } = require("@azure/arm-connectedvmware");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create Or Update InventoryItem.
 *
 * @summary Create Or Update InventoryItem.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/CreateInventoryItem.json
 */
async function createInventoryItem() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const vcenterName = "ContosoVCenter";
  const inventoryItemName = "testItem";
  const body = { inventoryType: "ResourcePool" };
  const options = { body };
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential, subscriptionId);
  const result = await client.inventoryItems.create(
    resourceGroupName,
    vcenterName,
    inventoryItemName,
    options
  );
  console.log(result);
}

createInventoryItem().catch(console.error);
