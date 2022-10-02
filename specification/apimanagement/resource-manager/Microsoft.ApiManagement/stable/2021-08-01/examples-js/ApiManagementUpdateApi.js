const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates the specified API of the API Management service instance.
 *
 * @summary Updates the specified API of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementUpdateApi.json
 */
async function apiManagementUpdateApi() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "echo-api";
  const ifMatch = "*";
  const parameters = {
    path: "newecho",
    displayName: "Echo API New",
    serviceUrl: "http://echoapi.cloudapp.net/api2",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.api.update(
    resourceGroupName,
    serviceName,
    apiId,
    ifMatch,
    parameters
  );
  console.log(result);
}

apiManagementUpdateApi().catch(console.error);
