const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists all diagnostics of an API.
 *
 * @summary Lists all diagnostics of an API.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementListApiDiagnostics.json
 */
async function apiManagementListApiDiagnostics() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "echo-api";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.apiDiagnostic.listByService(
    resourceGroupName,
    serviceName,
    apiId
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

apiManagementListApiDiagnostics().catch(console.error);
