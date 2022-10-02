const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes the specified hostname configuration from the specified Gateway.
 *
 * @summary Deletes the specified hostname configuration from the specified Gateway.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementDeleteGatewayHostnameConfiguration.json
 */
async function apiManagementDeleteGatewayHostnameConfiguration() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const gatewayId = "gw1";
  const hcId = "default";
  const ifMatch = "*";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.gatewayHostnameConfiguration.delete(
    resourceGroupName,
    serviceName,
    gatewayId,
    hcId,
    ifMatch
  );
  console.log(result);
}

apiManagementDeleteGatewayHostnameConfiguration().catch(console.error);
