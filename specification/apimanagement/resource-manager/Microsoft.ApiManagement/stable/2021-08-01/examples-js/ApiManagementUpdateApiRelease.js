const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates the details of the release of the API specified by its identifier.
 *
 * @summary Updates the details of the release of the API specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementUpdateApiRelease.json
 */
async function apiManagementUpdateApiRelease() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "a1";
  const releaseId = "testrev";
  const ifMatch = "*";
  const parameters = {
    apiId:
      "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apis/a1",
    notes: "yahooagain",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiRelease.update(
    resourceGroupName,
    serviceName,
    apiId,
    releaseId,
    ifMatch,
    parameters
  );
  console.log(result);
}

apiManagementUpdateApiRelease().catch(console.error);
