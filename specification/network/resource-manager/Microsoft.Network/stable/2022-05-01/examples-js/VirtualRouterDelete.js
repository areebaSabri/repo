const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes the specified Virtual Router.
 *
 * @summary Deletes the specified Virtual Router.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/VirtualRouterDelete.json
 */
async function deleteVirtualRouter() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualRouterName = "virtualRouter";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualRouters.beginDeleteAndWait(
    resourceGroupName,
    virtualRouterName
  );
  console.log(result);
}

deleteVirtualRouter().catch(console.error);
