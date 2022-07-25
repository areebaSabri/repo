const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Copies an image to this container registry from the specified container registry.
 *
 * @summary Copies an image to this container registry from the specified container registry.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2022-02-01-preview/examples/ImportImageFromPublicRegistry.json
 */
async function importImageFromPublicRegistry() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const parameters = {
    mode: "Force",
    source: {
      registryUri: "registry.hub.docker.com",
      sourceImage: "library/hello-world",
    },
    targetTags: ["targetRepository:targetTag"],
    untaggedTargetRepositories: ["targetRepository1"],
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.registries.beginImportImageAndWait(
    resourceGroupName,
    registryName,
    parameters
  );
  console.log(result);
}

importImageFromPublicRegistry().catch(console.error);
