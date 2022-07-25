const { KeyVaultManagementClient } = require("@azure/arm-keyvault");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes the specified private endpoint connection associated with the managed hsm pool.
 *
 * @summary Deletes the specified private endpoint connection associated with the managed hsm pool.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/ManagedHsm_deletePrivateEndpointConnection.json
 */
async function managedHsmDeletePrivateEndpointConnection() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "sample-group";
  const name = "sample-mhsm";
  const privateEndpointConnectionName = "sample-pec";
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const result = await client.mhsmPrivateEndpointConnections.beginDeleteAndWait(
    resourceGroupName,
    name,
    privateEndpointConnectionName
  );
  console.log(result);
}

managedHsmDeletePrivateEndpointConnection().catch(console.error);
