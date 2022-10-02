const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes specific named value from the API Management service instance.
 *
 * @summary Deletes specific named value from the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementDeleteNamedValue.json
 */
async function apiManagementDeleteNamedValue() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const namedValueId = "testprop2";
  const ifMatch = "*";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.namedValue.delete(
    resourceGroupName,
    serviceName,
    namedValueId,
    ifMatch
  );
  console.log(result);
}

apiManagementDeleteNamedValue().catch(console.error);
