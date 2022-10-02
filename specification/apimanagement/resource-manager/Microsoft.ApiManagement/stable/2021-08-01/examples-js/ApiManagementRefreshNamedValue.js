const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Refresh the secret of the named value specified by its identifier.
 *
 * @summary Refresh the secret of the named value specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementRefreshNamedValue.json
 */
async function apiManagementRefreshNamedValue() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const namedValueId = "testprop2";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.namedValue.beginRefreshSecretAndWait(
    resourceGroupName,
    serviceName,
    namedValueId
  );
  console.log(result);
}

apiManagementRefreshNamedValue().catch(console.error);
