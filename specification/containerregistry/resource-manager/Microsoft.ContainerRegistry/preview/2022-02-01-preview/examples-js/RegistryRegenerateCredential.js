const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Regenerates one of the login credentials for the specified container registry.
 *
 * @summary Regenerates one of the login credentials for the specified container registry.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2022-02-01-preview/examples/RegistryRegenerateCredential.json
 */
async function registryRegenerateCredential() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const regenerateCredentialParameters = {
    name: "password",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.registries.regenerateCredential(
    resourceGroupName,
    registryName,
    regenerateCredentialParameters
  );
  console.log(result);
}

registryRegenerateCredential().catch(console.error);
