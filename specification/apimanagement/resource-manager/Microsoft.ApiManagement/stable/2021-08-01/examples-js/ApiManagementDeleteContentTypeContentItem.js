const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Removes the specified developer portal's content item.
 *
 * @summary Removes the specified developer portal's content item.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementDeleteContentTypeContentItem.json
 */
async function apiManagementDeleteContentTypeContentItem() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const contentTypeId = "page";
  const contentItemId = "4e3cf6a5-574a-ba08-1f23-2e7a38faa6d8";
  const ifMatch = "*";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.contentItem.delete(
    resourceGroupName,
    serviceName,
    contentTypeId,
    contentItemId,
    ifMatch
  );
  console.log(result);
}

apiManagementDeleteContentTypeContentItem().catch(console.error);
