const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the policy configuration at the API level.
 *
 * @summary Get the policy configuration at the API level.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementListApiPolicies.json
 */
async function apiManagementListApiPolicies() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "5600b59475ff190048040001";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiPolicy.listByApi(resourceGroupName, serviceName, apiId);
  console.log(result);
}

apiManagementListApiPolicies().catch(console.error);
