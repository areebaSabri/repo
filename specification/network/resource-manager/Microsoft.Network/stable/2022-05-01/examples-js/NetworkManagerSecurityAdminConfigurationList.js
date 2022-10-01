const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists all the network manager security admin configurations in a network manager, in a paginated format.
 *
 * @summary Lists all the network manager security admin configurations in a network manager, in a paginated format.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkManagerSecurityAdminConfigurationList.json
 */
async function listSecurityAdminConfigurationsInANetworkManager() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "rg1";
  const networkManagerName = "testNetworkManager";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.securityAdminConfigurations.list(
    resourceGroupName,
    networkManagerName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listSecurityAdminConfigurationsInANetworkManager().catch(console.error);
