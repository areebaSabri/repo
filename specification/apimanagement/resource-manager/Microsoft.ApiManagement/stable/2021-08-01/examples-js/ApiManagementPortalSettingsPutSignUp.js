const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or Update Sign-Up settings.
 *
 * @summary Create or Update Sign-Up settings.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementPortalSettingsPutSignUp.json
 */
async function apiManagementPortalSettingsUpdateSignUp() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const ifMatch = "*";
  const parameters = {
    enabled: true,
    termsOfService: {
      consentRequired: true,
      enabled: true,
      text: "Terms of service text.",
    },
  };
  const options = { ifMatch };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.signUpSettings.createOrUpdate(
    resourceGroupName,
    serviceName,
    parameters,
    options
  );
  console.log(result);
}

apiManagementPortalSettingsUpdateSignUp().catch(console.error);
