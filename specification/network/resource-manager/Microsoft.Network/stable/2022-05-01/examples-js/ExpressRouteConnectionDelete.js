const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes a connection to a ExpressRoute circuit.
 *
 * @summary Deletes a connection to a ExpressRoute circuit.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/ExpressRouteConnectionDelete.json
 */
async function expressRouteConnectionDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "resourceGroupName";
  const expressRouteGatewayName = "expressRouteGatewayName";
  const connectionName = "connectionName";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRouteConnections.beginDeleteAndWait(
    resourceGroupName,
    expressRouteGatewayName,
    connectionName
  );
  console.log(result);
}

expressRouteConnectionDelete().catch(console.error);
