const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List secrets for a dapr component
 *
 * @summary List secrets for a dapr component
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/DaprComponents_ListSecrets.json
 */
async function listContainerAppsSecrets() {
  const subscriptionId = "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName = "examplerg";
  const environmentName = "myenvironment";
  const componentName = "reddog";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.daprComponents.listSecrets(
    resourceGroupName,
    environmentName,
    componentName
  );
  console.log(result);
}

listContainerAppsSecrets().catch(console.error);
