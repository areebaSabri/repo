const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates the developer portal's content type. Content types describe content items' properties, validation rules, and constraints. Custom content types' identifiers need to start with the `c-` prefix. Built-in content types can't be modified.
 *
 * @summary Creates or updates the developer portal's content type. Content types describe content items' properties, validation rules, and constraints. Custom content types' identifiers need to start with the `c-` prefix. Built-in content types can't be modified.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateContentType.json
 */
async function apiManagementCreateContentType() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const contentTypeId = "page";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.contentType.createOrUpdate(
    resourceGroupName,
    serviceName,
    contentTypeId
  );
  console.log(result);
}

apiManagementCreateContentType().catch(console.error);
