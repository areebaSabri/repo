const { PrivateDnsManagementClient } = require("@azure/arm-privatedns");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a virtual network link to the specified Private DNS zone.
 *
 * @summary Gets a virtual network link to the specified Private DNS zone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2020-06-01/examples/VirtualNetworkLinkGet.json
 */
async function getPrivateDnsZoneVirtualNetworkLink() {
  const subscriptionId = "subscriptionId";
  const resourceGroupName = "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const virtualNetworkLinkName = "virtualNetworkLink1";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkLinks.get(
    resourceGroupName,
    privateZoneName,
    virtualNetworkLinkName
  );
  console.log(result);
}

getPrivateDnsZoneVirtualNetworkLink().catch(console.error);
