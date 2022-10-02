const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes the specified identity provider configuration.
 *
 * @summary Deletes the specified identity provider configuration.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementDeleteIdentityProvider.json
 */
async function apiManagementDeleteIdentityProvider() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const identityProviderName = "aad";
  const ifMatch = "*";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.identityProvider.delete(
    resourceGroupName,
    serviceName,
    identityProviderName,
    ifMatch
  );
  console.log(result);
}

apiManagementDeleteIdentityProvider().catch(console.error);
