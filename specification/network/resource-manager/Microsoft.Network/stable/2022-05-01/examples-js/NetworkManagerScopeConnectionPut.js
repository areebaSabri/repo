const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates scope connection from Network Manager
 *
 * @summary Creates or updates scope connection from Network Manager
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkManagerScopeConnectionPut.json
 */
async function createOrUpdateNetworkManagerScopeConnection() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "rg1";
  const networkManagerName = "testNetworkManager";
  const scopeConnectionName = "TestScopeConnection";
  const parameters = {
    description: "This is a scope connection to a cross tenant subscription.",
    resourceId: "subscriptions/f0dc2b34-dfad-40e4-83e0-2309fed8d00b",
    tenantId: "6babcaad-604b-40ac-a9d7-9fd97c0b779f",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.scopeConnections.createOrUpdate(
    resourceGroupName,
    networkManagerName,
    scopeConnectionName,
    parameters
  );
  console.log(result);
}

createOrUpdateNetworkManagerScopeConnection().catch(console.error);
