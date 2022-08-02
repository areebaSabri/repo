const { MobileNetworkManagementClient } = require("@azure/arm-mobilenetwork");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets information about the specified packet core control plane version.
 *
 * @summary Gets information about the specified packet core control plane version.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/PacketCoreControlPlaneVersionGet.json
 */
async function getPacketCoreControlPlaneVersion() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const versionName = "PMN-4-11-1";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.packetCoreControlPlaneVersions.get(versionName);
  console.log(result);
}

getPacketCoreControlPlaneVersion().catch(console.error);
