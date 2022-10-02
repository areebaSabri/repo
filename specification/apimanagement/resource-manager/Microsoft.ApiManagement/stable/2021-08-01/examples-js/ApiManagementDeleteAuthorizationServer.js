const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes specific authorization server instance.
 *
 * @summary Deletes specific authorization server instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementDeleteAuthorizationServer.json
 */
async function apiManagementDeleteAuthorizationServer() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const authsid = "newauthServer2";
  const ifMatch = "*";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.authorizationServer.delete(
    resourceGroupName,
    serviceName,
    authsid,
    ifMatch
  );
  console.log(result);
}

apiManagementDeleteAuthorizationServer().catch(console.error);
