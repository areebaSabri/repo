const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the entity state (Etag) version of the SignUpSettings.
 *
 * @summary Gets the entity state (Etag) version of the SignUpSettings.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementHeadSignUpSettings.json
 */
async function apiManagementHeadSignUpSettings() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.signUpSettings.getEntityTag(resourceGroupName, serviceName);
  console.log(result);
}

apiManagementHeadSignUpSettings().catch(console.error);
