const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get all private endpoint connections in the project. Returns a json array of objects of type 'privateEndpointConnections' as specified in the Models section.
 *
 * @summary Get all private endpoint connections in the project. Returns a json array of objects of type 'privateEndpointConnections' as specified in the Models section.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/PrivateEndpointConnections_ListByProject.json
 */
async function privateEndpointConnectionsListByProject() {
  const subscriptionId = "6393a73f-8d55-47ef-b6dd-179b3e0c7910";
  const resourceGroupName = "abgoyal-westEurope";
  const projectName = "abgoyalWEselfhostb72bproject";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.privateEndpointConnectionOperations.listByProject(
    resourceGroupName,
    projectName
  );
  console.log(result);
}

privateEndpointConnectionsListByProject().catch(console.error);
