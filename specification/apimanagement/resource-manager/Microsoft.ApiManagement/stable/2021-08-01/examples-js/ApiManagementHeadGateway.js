const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the entity state (Etag) version of the Gateway specified by its identifier.
 *
 * @summary Gets the entity state (Etag) version of the Gateway specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementHeadGateway.json
 */
async function apiManagementHeadGateway() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const gatewayId = "mygateway";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.gateway.getEntityTag(resourceGroupName, serviceName, gatewayId);
  console.log(result);
}

apiManagementHeadGateway().catch(console.error);
