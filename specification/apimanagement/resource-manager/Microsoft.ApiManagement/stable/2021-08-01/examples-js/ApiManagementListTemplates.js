const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets all email templates
 *
 * @summary Gets all email templates
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementListTemplates.json
 */
async function apiManagementListTemplates() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.emailTemplate.listByService(resourceGroupName, serviceName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

apiManagementListTemplates().catch(console.error);
