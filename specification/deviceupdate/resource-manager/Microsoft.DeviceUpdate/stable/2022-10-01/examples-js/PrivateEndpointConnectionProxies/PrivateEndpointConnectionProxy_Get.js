const { DeviceUpdate } = require("@azure/arm-deviceupdate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to (INTERNAL - DO NOT USE) Get the specified private endpoint connection proxy associated with the device update account.
 *
 * @summary (INTERNAL - DO NOT USE) Get the specified private endpoint connection proxy associated with the device update account.
 * x-ms-original-file: specification/deviceupdate/resource-manager/Microsoft.DeviceUpdate/stable/2022-10-01/examples/PrivateEndpointConnectionProxies/PrivateEndpointConnectionProxy_Get.json
 */
async function privateEndpointConnectionProxyGet() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "test-rg";
  const accountName = "contoso";
  const privateEndpointConnectionProxyId = "peexample01";
  const credential = new DefaultAzureCredential();
  const client = new DeviceUpdate(credential, subscriptionId);
  const result = await client.privateEndpointConnectionProxies.get(
    resourceGroupName,
    accountName,
    privateEndpointConnectionProxyId
  );
  console.log(result);
}

privateEndpointConnectionProxyGet().catch(console.error);
