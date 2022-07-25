const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes a scope map from a container registry.
 *
 * @summary Deletes a scope map from a container registry.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2022-02-01-preview/examples/ScopeMapDelete.json
 */
async function scopeMapDelete() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const scopeMapName = "myScopeMap";
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.scopeMaps.beginDeleteAndWait(
    resourceGroupName,
    registryName,
    scopeMapName
  );
  console.log(result);
}

scopeMapDelete().catch(console.error);
