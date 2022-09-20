const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List deployments that are using the builder.
 *
 * @summary List deployments that are using the builder.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/BuildServiceBuilder_ListDeployments.json
 */
async function buildServiceBuilderListDeployments() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const buildServiceName = "default";
  const builderName = "default";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.buildServiceBuilder.listDeployments(
    resourceGroupName,
    serviceName,
    buildServiceName,
    builderName
  );
  console.log(result);
}

buildServiceBuilderListDeployments().catch(console.error);
