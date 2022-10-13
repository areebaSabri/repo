const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete a Dapr Component from a connected environment.
 *
 * @summary Delete a Dapr Component from a connected environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ConnectedEnvironmentsDaprComponents_Delete.json
 */
async function deleteDaprComponent() {
  const subscriptionId = "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName = "examplerg";
  const connectedEnvironmentName = "myenvironment";
  const componentName = "reddog";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.connectedEnvironmentsDaprComponents.delete(
    resourceGroupName,
    connectedEnvironmentName,
    componentName
  );
  console.log(result);
}

deleteDaprComponent().catch(console.error);
