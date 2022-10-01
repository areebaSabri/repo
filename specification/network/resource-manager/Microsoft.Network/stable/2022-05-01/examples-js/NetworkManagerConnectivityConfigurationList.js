const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists all the network manager connectivity configuration in a specified network manager.
 *
 * @summary Lists all the network manager connectivity configuration in a specified network manager.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkManagerConnectivityConfigurationList.json
 */
async function connectivityConfigurationsList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const networkManagerName = "testNetworkManager";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.connectivityConfigurations.list(
    resourceGroupName,
    networkManagerName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

connectivityConfigurationsList().catch(console.error);
