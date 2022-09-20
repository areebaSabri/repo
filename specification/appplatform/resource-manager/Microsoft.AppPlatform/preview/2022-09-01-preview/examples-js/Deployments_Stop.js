const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Stop the deployment.
 *
 * @summary Stop the deployment.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/Deployments_Stop.json
 */
async function deploymentsStop() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const deploymentName = "mydeployment";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.deployments.beginStopAndWait(
    resourceGroupName,
    serviceName,
    appName,
    deploymentName
  );
  console.log(result);
}

deploymentsStop().catch(console.error);
