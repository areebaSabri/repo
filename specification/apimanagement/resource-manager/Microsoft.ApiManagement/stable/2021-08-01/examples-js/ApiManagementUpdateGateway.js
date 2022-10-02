const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates the details of the gateway specified by its identifier.
 *
 * @summary Updates the details of the gateway specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementUpdateGateway.json
 */
async function apiManagementUpdateGateway() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const gatewayId = "gw1";
  const ifMatch = "*";
  const parameters = {
    description: "my gateway 1",
    locationData: { name: "my location" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.gateway.update(
    resourceGroupName,
    serviceName,
    gatewayId,
    ifMatch,
    parameters
  );
  console.log(result);
}

apiManagementUpdateGateway().catch(console.error);
