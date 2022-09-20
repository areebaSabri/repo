const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a build service resource.
 *
 * @summary Get a build service resource.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/BuildService_GetBuildService.json
 */
async function buildServiceGetBuildService() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const buildServiceName = "default";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.buildServiceOperations.getBuildService(
    resourceGroupName,
    serviceName,
    buildServiceName
  );
  console.log(result);
}

buildServiceGetBuildService().catch(console.error);
