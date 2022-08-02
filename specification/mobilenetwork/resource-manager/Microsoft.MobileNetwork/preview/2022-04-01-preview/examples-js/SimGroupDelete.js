const { MobileNetworkManagementClient } = require("@azure/arm-mobilenetwork");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes the specified SIM group.
 *
 * @summary Deletes the specified SIM group.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/SimGroupDelete.json
 */
async function deleteSimGroup() {
  const subscriptionId = "subid";
  const resourceGroupName = "testResourceGroupName";
  const simGroupName = "testSimGroup";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.simGroups.beginDeleteAndWait(resourceGroupName, simGroupName);
  console.log(result);
}

deleteSimGroup().catch(console.error);
