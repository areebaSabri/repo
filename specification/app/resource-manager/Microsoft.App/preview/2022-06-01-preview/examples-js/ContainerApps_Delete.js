const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete a Container App.
 *
 * @summary Delete a Container App.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ContainerApps_Delete.json
 */
async function deleteContainerApp() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const containerAppName = "testWorkerApp0";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.containerApps.beginDeleteAndWait(resourceGroupName, containerAppName);
  console.log(result);
}

deleteContainerApp().catch(console.error);
