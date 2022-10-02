const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to This operation validates the changes in the specified Git branch. This is a long running operation and could take several minutes to complete.
 *
 * @summary This operation validates the changes in the specified Git branch. This is a long running operation and could take several minutes to complete.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementTenantConfigurationValidate.json
 */
async function apiManagementTenantConfigurationValidate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const configurationName = "configuration";
  const parameters = { branch: "master" };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.tenantConfiguration.beginValidateAndWait(
    resourceGroupName,
    serviceName,
    configurationName,
    parameters
  );
  console.log(result);
}

apiManagementTenantConfigurationValidate().catch(console.error);
