const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a Dapr Component in a Managed Environment.
 *
 * @summary Creates or updates a Dapr Component in a Managed Environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/DaprComponents_CreateOrUpdate_SecretStoreComponent.json
 */
async function createOrUpdateDaprComponentWithSecretStoreComponent() {
  const subscriptionId = "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName = "examplerg";
  const environmentName = "myenvironment";
  const componentName = "reddog";
  const daprComponentEnvelope = {
    componentType: "state.azure.cosmosdb",
    ignoreErrors: false,
    initTimeout: "50s",
    metadata: [
      { name: "url", value: "<COSMOS-URL>" },
      { name: "database", value: "itemsDB" },
      { name: "collection", value: "items" },
      { name: "masterkey", secretRef: "masterkey" },
    ],
    scopes: ["container-app-1", "container-app-2"],
    secretStoreComponent: "my-secret-store",
    version: "v1",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.daprComponents.createOrUpdate(
    resourceGroupName,
    environmentName,
    componentName,
    daprComponentEnvelope
  );
  console.log(result);
}

createOrUpdateDaprComponentWithSecretStoreComponent().catch(console.error);
