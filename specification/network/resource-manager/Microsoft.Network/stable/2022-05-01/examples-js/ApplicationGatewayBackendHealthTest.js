const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the backend health for given combination of backend pool and http setting of the specified application gateway in a resource group.
 *
 * @summary Gets the backend health for given combination of backend pool and http setting of the specified application gateway in a resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/ApplicationGatewayBackendHealthTest.json
 */
async function testBackendHealth() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const applicationGatewayName = "appgw";
  const probeRequest = {
    path: "/",
    backendAddressPool: {
      id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendaddressPools/MFAnalyticsPool",
    },
    backendHttpSettings: {
      id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendHttpSettingsCollection/MFPoolSettings",
    },
    pickHostNameFromBackendHttpSettings: true,
    timeout: 30,
    protocol: "Http",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.applicationGateways.beginBackendHealthOnDemandAndWait(
    resourceGroupName,
    applicationGatewayName,
    probeRequest
  );
  console.log(result);
}

testBackendHealth().catch(console.error);
