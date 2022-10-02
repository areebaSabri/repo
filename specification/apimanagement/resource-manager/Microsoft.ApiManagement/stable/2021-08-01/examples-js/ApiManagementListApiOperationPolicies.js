const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the list of policy configuration at the API Operation level.
 *
 * @summary Get the list of policy configuration at the API Operation level.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementListApiOperationPolicies.json
 */
async function apiManagementListApiOperationPolicies() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "599e2953193c3c0bd0b3e2fa";
  const operationId = "599e29ab193c3c0bd0b3e2fb";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiOperationPolicy.listByOperation(
    resourceGroupName,
    serviceName,
    apiId,
    operationId
  );
  console.log(result);
}

apiManagementListApiOperationPolicies().catch(console.error);
