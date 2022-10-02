const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the entity state (Etag) version of the Diagnostic for an API specified by its identifier.
 *
 * @summary Gets the entity state (Etag) version of the Diagnostic for an API specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementHeadApiDiagnostic.json
 */
async function apiManagementHeadApiDiagnostic() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "57d1f7558aa04f15146d9d8a";
  const diagnosticId = "applicationinsights";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiDiagnostic.getEntityTag(
    resourceGroupName,
    serviceName,
    apiId,
    diagnosticId
  );
  console.log(result);
}

apiManagementHeadApiDiagnostic().catch(console.error);
