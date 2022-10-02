const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the details of the developer portal's content type. Content types describe content items' properties, validation rules, and constraints.
 *
 * @summary Gets the details of the developer portal's content type. Content types describe content items' properties, validation rules, and constraints.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementGetContentType.json
 */
async function apiManagementGetContentType() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const contentTypeId = "page";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.contentType.get(resourceGroupName, serviceName, contentTypeId);
  console.log(result);
}

apiManagementGetContentType().catch(console.error);
