const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Check the resource name is valid as well as not in use.
 *
 * @summary Check the resource name is valid as well as not in use.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/Apps_ValidateDomain.json
 */
async function appsValidateDomain() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const validatePayload = { name: "mydomain.io" };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.apps.validateDomain(
    resourceGroupName,
    serviceName,
    appName,
    validatePayload
  );
  console.log(result);
}

appsValidateDomain().catch(console.error);
