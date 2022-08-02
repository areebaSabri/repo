const { MobileNetworkManagementClient } = require("@azure/arm-mobilenetwork");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists all supported packet core control planes versions.
 *
 * @summary Lists all supported packet core control planes versions.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/PacketCoreControlPlaneVersionListByResourceGroup.json
 */
async function getSupportedPacketCoreControlPlaneVersions() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.packetCoreControlPlaneVersions.listByResourceGroup()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getSupportedPacketCoreControlPlaneVersions().catch(console.error);
