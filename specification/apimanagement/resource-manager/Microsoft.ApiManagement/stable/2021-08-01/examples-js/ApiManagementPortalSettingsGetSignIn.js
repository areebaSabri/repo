const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get Sign In Settings for the Portal
 *
 * @summary Get Sign In Settings for the Portal
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementPortalSettingsGetSignIn.json
 */
async function apiManagementPortalSettingsGetSignIn() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.signInSettings.get(resourceGroupName, serviceName);
  console.log(result);
}

apiManagementPortalSettingsGetSignIn().catch(console.error);
