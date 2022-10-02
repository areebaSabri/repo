const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or Update Sign-In settings.
 *
 * @summary Create or Update Sign-In settings.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementPortalSettingsPutSignIn.json
 */
async function apiManagementPortalSettingsUpdateSignIn() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const ifMatch = "*";
  const parameters = { enabled: true };
  const options = { ifMatch };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.signInSettings.createOrUpdate(
    resourceGroupName,
    serviceName,
    parameters,
    options
  );
  console.log(result);
}

apiManagementPortalSettingsUpdateSignIn().catch(console.error);
