const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the entity state (Etag) version of the API operation policy specified by its identifier.
 *
 * @summary Gets the entity state (Etag) version of the API operation policy specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementHeadApiOperationPolicy.json
 */
async function apiManagementHeadApiOperationPolicy() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "5600b539c53f5b0062040001";
  const operationId = "5600b53ac53f5b0062080006";
  const policyId = "policy";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiOperationPolicy.getEntityTag(
    resourceGroupName,
    serviceName,
    apiId,
    operationId,
    policyId
  );
  console.log(result);
}

apiManagementHeadApiOperationPolicy().catch(console.error);
