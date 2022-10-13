const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a Dapr Component in a connected environment.
 *
 * @summary Creates or updates a Dapr Component in a connected environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ConnectedEnvironmentsDaprComponents_CreateOrUpdate.json
 */
async function createOrUpdateDaprComponent() {
  const subscriptionId = "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName = "examplerg";
  const connectedEnvironmentName = "myenvironment";
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
    secrets: [{ name: "masterkey", value: "keyvalue" }],
    version: "v1",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.connectedEnvironmentsDaprComponents.createOrUpdate(
    resourceGroupName,
    connectedEnvironmentName,
    componentName,
    daprComponentEnvelope
  );
  console.log(result);
}

createOrUpdateDaprComponent().catch(console.error);
