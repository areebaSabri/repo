const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or Update Delegation settings.
 *
 * @summary Create or Update Delegation settings.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementPortalSettingsPutDelegation.json
 */
async function apiManagementPortalSettingsUpdateDelegation() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const ifMatch = "*";
  const parameters = {
    subscriptions: { enabled: true },
    url: "http://contoso.com/delegation",
    userRegistration: { enabled: true },
    validationKey: "<validationKey>",
  };
  const options = { ifMatch };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.delegationSettings.createOrUpdate(
    resourceGroupName,
    serviceName,
    parameters,
    options
  );
  console.log(result);
}

apiManagementPortalSettingsUpdateDelegation().catch(console.error);
