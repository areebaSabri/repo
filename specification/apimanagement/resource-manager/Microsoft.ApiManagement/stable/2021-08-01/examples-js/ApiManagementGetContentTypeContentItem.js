const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Returns the developer portal's content item specified by its identifier.
 *
 * @summary Returns the developer portal's content item specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementGetContentTypeContentItem.json
 */
async function apiManagementGetContentTypeContentItem() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const contentTypeId = "page";
  const contentItemId = "4e3cf6a5-574a-ba08-1f23-2e7a38faa6d8";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.contentItem.get(
    resourceGroupName,
    serviceName,
    contentTypeId,
    contentItemId
  );
  console.log(result);
}

apiManagementGetContentTypeContentItem().catch(console.error);
