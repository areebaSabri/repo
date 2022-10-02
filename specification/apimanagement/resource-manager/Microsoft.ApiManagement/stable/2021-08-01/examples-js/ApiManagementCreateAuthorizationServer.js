const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates new authorization server or updates an existing authorization server.
 *
 * @summary Creates new authorization server or updates an existing authorization server.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateAuthorizationServer.json
 */
async function apiManagementCreateAuthorizationServer() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const authsid = "newauthServer";
  const parameters = {
    description: "test server",
    authorizationEndpoint: "https://www.contoso.com/oauth2/auth",
    authorizationMethods: ["GET"],
    bearerTokenSendingMethods: ["authorizationHeader"],
    clientId: "1",
    clientRegistrationEndpoint: "https://www.contoso.com/apps",
    clientSecret: "2",
    defaultScope: "read write",
    displayName: "test2",
    grantTypes: ["authorizationCode", "implicit"],
    resourceOwnerPassword: "pwd",
    resourceOwnerUsername: "un",
    supportState: true,
    tokenEndpoint: "https://www.contoso.com/oauth2/token",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.authorizationServer.createOrUpdate(
    resourceGroupName,
    serviceName,
    authsid,
    parameters
  );
  console.log(result);
}

apiManagementCreateAuthorizationServer().catch(console.error);
