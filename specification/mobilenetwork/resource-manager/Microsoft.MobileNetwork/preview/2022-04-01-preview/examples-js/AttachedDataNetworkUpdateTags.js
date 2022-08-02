const { MobileNetworkManagementClient } = require("@azure/arm-mobilenetwork");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates an attached data network tags.
 *
 * @summary Updates an attached data network tags.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/AttachedDataNetworkUpdateTags.json
 */
async function updateAttachedDataNetworkTags() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const packetCoreControlPlaneName = "TestPacketCoreCP";
  const packetCoreDataPlaneName = "TestPacketCoreDP";
  const attachedDataNetworkName = "TestAttachedDataNetwork";
  const parameters = { tags: { tag1: "value1", tag2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.attachedDataNetworks.updateTags(
    resourceGroupName,
    packetCoreControlPlaneName,
    packetCoreDataPlaneName,
    attachedDataNetworkName,
    parameters
  );
  console.log(result);
}

updateAttachedDataNetworkTags().catch(console.error);
