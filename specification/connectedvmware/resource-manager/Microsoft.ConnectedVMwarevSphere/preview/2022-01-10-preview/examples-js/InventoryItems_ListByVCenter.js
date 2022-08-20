const { AzureArcVMwareManagementServiceAPI } = require("@azure/arm-connectedvmware");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Returns the list of inventoryItems of the given vCenter.
 *
 * @summary Returns the list of inventoryItems of the given vCenter.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/InventoryItems_ListByVCenter.json
 */
async function inventoryItemsListByVCenter() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const vcenterName = "ContosoVCenter";
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.inventoryItems.listByVCenter(resourceGroupName, vcenterName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

inventoryItemsListByVCenter().catch(console.error);
