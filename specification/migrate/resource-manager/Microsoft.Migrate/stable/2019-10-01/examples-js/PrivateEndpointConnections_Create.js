const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update a specific private endpoint connection in the project.
 *
 * @summary Update a specific private endpoint connection in the project.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/PrivateEndpointConnections_Create.json
 */
async function privateEndpointConnectionsCreate() {
  const subscriptionId = "6393a73f-8d55-47ef-b6dd-179b3e0c7910";
  const resourceGroupName = "abgoyal-westEurope";
  const projectName = "abgoyalWEselfhostb72bproject";
  const privateEndpointConnectionName =
    "custestpece80project3980pe.7e35576b-3df4-478e-9759-f64351cf4f43";
  const privateEndpointConnectionBody = {
    eTag: '"00009300-0000-0300-0000-602b967b0000"',
    properties: {
      privateLinkServiceConnectionState: {
        description: undefined,
        actionsRequired: "",
        status: "Approved",
      },
    },
  };
  const options = {
    privateEndpointConnectionBody,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.privateEndpointConnectionOperations.update(
    resourceGroupName,
    projectName,
    privateEndpointConnectionName,
    options
  );
  console.log(result);
}

privateEndpointConnectionsCreate().catch(console.error);
