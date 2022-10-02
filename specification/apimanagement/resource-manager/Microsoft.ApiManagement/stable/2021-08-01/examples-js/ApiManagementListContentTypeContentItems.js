const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists developer portal's content items specified by the provided content type.
 *
 * @summary Lists developer portal's content items specified by the provided content type.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementListContentTypeContentItems.json
 */
async function apiManagementListContentTypeContentItems() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const contentTypeId = "page";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.contentItem.listByService(
    resourceGroupName,
    serviceName,
    contentTypeId
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

apiManagementListContentTypeContentItems().catch(console.error);
