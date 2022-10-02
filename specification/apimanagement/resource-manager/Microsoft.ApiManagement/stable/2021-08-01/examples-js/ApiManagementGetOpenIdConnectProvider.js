const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets specific OpenID Connect Provider without secrets.
 *
 * @summary Gets specific OpenID Connect Provider without secrets.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementGetOpenIdConnectProvider.json
 */
async function apiManagementGetOpenIdConnectProvider() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const opid = "templateOpenIdConnect2";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.openIdConnectProvider.get(resourceGroupName, serviceName, opid);
  console.log(result);
}

apiManagementGetOpenIdConnectProvider().catch(console.error);
