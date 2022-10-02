const { ContainerAppsAPIClient } = require("@azure/arm-app");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a Dapr Component in a Managed Environment.
 *
 * @summary Creates or updates a Dapr Component in a Managed Environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-01-01-preview/examples/DaprComponents_CreateOrUpdate.json
 */
async function createOrUpdateDaprComponent() {
  const subscriptionId = "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName = "examplerg";
  const environmentName = "myenvironment";
  const name = "reddog";
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
  const result = await client.daprComponents.createOrUpdate(
    resourceGroupName,
    environmentName,
    name,
    daprComponentEnvelope
  );
  console.log(result);
}

createOrUpdateDaprComponent().catch(console.error);
