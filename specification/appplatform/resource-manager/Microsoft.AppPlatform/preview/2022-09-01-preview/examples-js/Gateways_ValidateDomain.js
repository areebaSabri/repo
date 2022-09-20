const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Check the domains are valid as well as not in use.
 *
 * @summary Check the domains are valid as well as not in use.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/Gateways_ValidateDomain.json
 */
async function gatewaysValidateDomain() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const gatewayName = "default";
  const validatePayload = { name: "mydomain.io" };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.gateways.validateDomain(
    resourceGroupName,
    serviceName,
    gatewayName,
    validatePayload
  );
  console.log(result);
}

gatewaysValidateDomain().catch(console.error);
