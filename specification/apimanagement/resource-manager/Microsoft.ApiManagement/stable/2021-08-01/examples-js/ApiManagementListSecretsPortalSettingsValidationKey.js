const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the secret validation key of the DelegationSettings.
 *
 * @summary Gets the secret validation key of the DelegationSettings.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementListSecretsPortalSettingsValidationKey.json
 */
async function apiManagementListSecretsPortalSettings() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.delegationSettings.listSecrets(resourceGroupName, serviceName);
  console.log(result);
}

apiManagementListSecretsPortalSettings().catch(console.error);
