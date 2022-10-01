const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete the pending scope connection created by this network manager.
 *
 * @summary Delete the pending scope connection created by this network manager.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkManagerScopeConnectionDelete.json
 */
async function deleteNetworkManagerScopeConnection() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "rg1";
  const networkManagerName = "testNetworkManager";
  const scopeConnectionName = "TestScopeConnection";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.scopeConnections.delete(
    resourceGroupName,
    networkManagerName,
    scopeConnectionName
  );
  console.log(result);
}

deleteNetworkManagerScopeConnection().catch(console.error);
