const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Set existing Deployment under the app as active
 *
 * @summary Set existing Deployment under the app as active
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/Apps_SetActiveDeployments.json
 */
async function appsSetActiveDeployments() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const activeDeploymentCollection = {
    activeDeploymentNames: ["default"],
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.apps.beginSetActiveDeploymentsAndWait(
    resourceGroupName,
    serviceName,
    appName,
    activeDeploymentCollection
  );
  console.log(result);
}

appsSetActiveDeployments().catch(console.error);
