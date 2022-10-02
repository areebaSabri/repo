const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a tag.
 *
 * @summary Creates a tag.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateTag.json
 */
async function apiManagementCreateTag() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const tagId = "tagId1";
  const parameters = { displayName: "tag1" };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.tag.createOrUpdate(resourceGroupName, serviceName, tagId, parameters);
  console.log(result);
}

apiManagementCreateTag().catch(console.error);
