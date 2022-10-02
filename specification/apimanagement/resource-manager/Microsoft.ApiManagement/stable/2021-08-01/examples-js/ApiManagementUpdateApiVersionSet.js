const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates the details of the Api VersionSet specified by its identifier.
 *
 * @summary Updates the details of the Api VersionSet specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementUpdateApiVersionSet.json
 */
async function apiManagementUpdateApiVersionSet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const versionSetId = "vs1";
  const ifMatch = "*";
  const parameters = {
    description: "Version configuration",
    displayName: "api set 1",
    versioningScheme: "Segment",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiVersionSet.update(
    resourceGroupName,
    serviceName,
    versionSetId,
    ifMatch,
    parameters
  );
  console.log(result);
}

apiManagementUpdateApiVersionSet().catch(console.error);
