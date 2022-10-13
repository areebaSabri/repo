const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete an connectedEnvironment.
 *
 * @summary Delete an connectedEnvironment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ConnectedEnvironments_Delete.json
 */
async function deleteConnectedEnvironmentByConnectedEnvironmentName() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "examplerg";
  const connectedEnvironmentName = "examplekenv";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.connectedEnvironments.beginDeleteAndWait(
    resourceGroupName,
    connectedEnvironmentName
  );
  console.log(result);
}

deleteConnectedEnvironmentByConnectedEnvironmentName().catch(console.error);
