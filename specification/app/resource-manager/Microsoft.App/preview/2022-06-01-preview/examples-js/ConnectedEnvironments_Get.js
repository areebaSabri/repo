const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the properties of an connectedEnvironment.
 *
 * @summary Get the properties of an connectedEnvironment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ConnectedEnvironments_Get.json
 */
async function getConnectedEnvironmentByConnectedEnvironmentName() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "examplerg";
  const connectedEnvironmentName = "examplekenv";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.connectedEnvironments.get(
    resourceGroupName,
    connectedEnvironmentName
  );
  console.log(result);
}

getConnectedEnvironmentByConnectedEnvironmentName().catch(console.error);
