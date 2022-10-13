const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get storage for a connectedEnvironment.
 *
 * @summary Get storage for a connectedEnvironment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ConnectedEnvironmentsStorages_Get.json
 */
async function getAEnvironmentsStoragePropertiesBySubscription() {
  const subscriptionId = "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName = "examplerg";
  const connectedEnvironmentName = "env";
  const storageName = "jlaw-demo1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.connectedEnvironmentsStorages.get(
    resourceGroupName,
    connectedEnvironmentName,
    storageName
  );
  console.log(result);
}

getAEnvironmentsStoragePropertiesBySubscription().catch(console.error);
