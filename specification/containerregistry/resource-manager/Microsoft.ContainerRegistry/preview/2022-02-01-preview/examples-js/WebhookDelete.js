const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes a webhook from a container registry.
 *
 * @summary Deletes a webhook from a container registry.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2022-02-01-preview/examples/WebhookDelete.json
 */
async function webhookDelete() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const webhookName = "myWebhook";
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.webhooks.beginDeleteAndWait(
    resourceGroupName,
    registryName,
    webhookName
  );
  console.log(result);
}

webhookDelete().catch(console.error);
