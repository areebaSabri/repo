const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Retrieves the details of a VirtualHubRouteTableV2.
 *
 * @summary Retrieves the details of a VirtualHubRouteTableV2.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/VirtualHubRouteTableV2Get.json
 */
async function virtualHubVirtualHubRouteTableV2Get() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualHubName = "virtualHub1";
  const routeTableName = "virtualHubRouteTable1a";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualHubRouteTableV2S.get(
    resourceGroupName,
    virtualHubName,
    routeTableName
  );
  console.log(result);
}

virtualHubVirtualHubRouteTableV2Get().catch(console.error);
