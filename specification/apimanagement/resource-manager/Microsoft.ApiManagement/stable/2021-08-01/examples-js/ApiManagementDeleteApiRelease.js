const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes the specified release in the API.
 *
 * @summary Deletes the specified release in the API.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementDeleteApiRelease.json
 */
async function apiManagementDeleteApiRelease() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "5a5fcc09124a7fa9b89f2f1d";
  const releaseId = "testrev";
  const ifMatch = "*";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiRelease.delete(
    resourceGroupName,
    serviceName,
    apiId,
    releaseId,
    ifMatch
  );
  console.log(result);
}

apiManagementDeleteApiRelease().catch(console.error);
