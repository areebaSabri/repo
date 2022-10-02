const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes specific OpenID Connect Provider of the API Management service instance.
 *
 * @summary Deletes specific OpenID Connect Provider of the API Management service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementDeleteOpenIdConnectProvider.json
 */
async function apiManagementDeleteOpenIdConnectProvider() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const opid = "templateOpenIdConnect3";
  const ifMatch = "*";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.openIdConnectProvider.delete(
    resourceGroupName,
    serviceName,
    opid,
    ifMatch
  );
  console.log(result);
}

apiManagementDeleteOpenIdConnectProvider().catch(console.error);
