const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Enable test endpoint functionality for a Service.
 *
 * @summary Enable test endpoint functionality for a Service.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/Services_EnableTestEndpoint.json
 */
async function servicesEnableTestEndpoint() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.services.enableTestEndpoint(resourceGroupName, serviceName);
  console.log(result);
}

servicesEnableTestEndpoint().catch(console.error);
