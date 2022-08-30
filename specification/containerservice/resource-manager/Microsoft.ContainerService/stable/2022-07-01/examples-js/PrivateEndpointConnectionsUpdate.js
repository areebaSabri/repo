const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates a private endpoint connection.
 *
 * @summary Updates a private endpoint connection.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/stable/2022-07-01/examples/PrivateEndpointConnectionsUpdate.json
 */
async function updatePrivateEndpointConnection() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const privateEndpointConnectionName = "privateendpointconnection1";
  const parameters = {
    privateLinkServiceConnectionState: { status: "Approved" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.update(
    resourceGroupName,
    resourceName,
    privateEndpointConnectionName,
    parameters
  );
  console.log(result);
}

updatePrivateEndpointConnection().catch(console.error);
