const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the developer portal revision specified by its identifier.
 *
 * @summary Gets the developer portal revision specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementHeadPortalRevision.json
 */
async function apiManagementHeadPortalRevision() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const portalRevisionId = "20201112101010";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.portalRevision.getEntityTag(
    resourceGroupName,
    serviceName,
    portalRevisionId
  );
  console.log(result);
}

apiManagementHeadPortalRevision().catch(console.error);
