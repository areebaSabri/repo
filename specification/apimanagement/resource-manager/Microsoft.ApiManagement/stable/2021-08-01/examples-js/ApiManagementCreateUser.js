const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or Updates a user.
 *
 * @summary Creates or Updates a user.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateUser.json
 */
async function apiManagementCreateUser() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const userId = "5931a75ae4bbd512288c680b";
  const parameters = {
    confirmation: "signup",
    email: "foobar@outlook.com",
    firstName: "foo",
    lastName: "bar",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.user.createOrUpdate(
    resourceGroupName,
    serviceName,
    userId,
    parameters
  );
  console.log(result);
}

apiManagementCreateUser().catch(console.error);
