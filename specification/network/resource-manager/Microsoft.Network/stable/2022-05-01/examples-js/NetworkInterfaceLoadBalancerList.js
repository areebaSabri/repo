const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List all load balancers in a network interface.
 *
 * @summary List all load balancers in a network interface.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkInterfaceLoadBalancerList.json
 */
async function networkInterfaceLoadBalancerList() {
  const subscriptionId = "subid";
  const resourceGroupName = "testrg";
  const networkInterfaceName = "nic1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.networkInterfaceLoadBalancers.list(
    resourceGroupName,
    networkInterfaceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

networkInterfaceLoadBalancerList().catch(console.error);
