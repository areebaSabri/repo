const { DeviceUpdate } = require("@azure/arm-deviceupdate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to (INTERNAL - DO NOT USE) List all private endpoint connection proxies in a device update account.
 *
 * @summary (INTERNAL - DO NOT USE) List all private endpoint connection proxies in a device update account.
 * x-ms-original-file: specification/deviceupdate/resource-manager/Microsoft.DeviceUpdate/preview/2022-04-01-preview/examples/PrivateEndpointConnectionProxies/PrivateEndpointConnectionProxy_ListByAccount.json
 */
async function privateEndpointConnectionProxyList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "test-rg";
  const accountName = "contoso";
  const credential = new DefaultAzureCredential();
  const client = new DeviceUpdate(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateEndpointConnectionProxies.listByAccount(
    resourceGroupName,
    accountName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

privateEndpointConnectionProxyList().catch(console.error);
