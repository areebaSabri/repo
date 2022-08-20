const { AzureArcVMwareManagementServiceAPI } = require("@azure/arm-connectedvmware");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Implements InventoryItem GET method.
 *
 * @summary Implements InventoryItem GET method.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/GetInventoryItem.json
 */
async function getInventoryItem() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const vcenterName = "ContosoVCenter";
  const inventoryItemName = "testItem";
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential, subscriptionId);
  const result = await client.inventoryItems.get(resourceGroupName, vcenterName, inventoryItemName);
  console.log(result);
}

getInventoryItem().catch(console.error);
