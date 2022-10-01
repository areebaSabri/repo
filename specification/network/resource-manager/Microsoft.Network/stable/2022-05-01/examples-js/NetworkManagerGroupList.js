const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the specified network group.
 *
 * @summary Lists the specified network group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkManagerGroupList.json
 */
async function networkGroupsList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "rg1";
  const networkManagerName = "testNetworkManager";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.networkGroups.list(resourceGroupName, networkManagerName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

networkGroupsList().catch(console.error);
