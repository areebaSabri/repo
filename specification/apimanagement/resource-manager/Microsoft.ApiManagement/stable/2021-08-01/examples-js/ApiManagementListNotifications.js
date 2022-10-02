const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists a collection of properties defined within a service instance.
 *
 * @summary Lists a collection of properties defined within a service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementListNotifications.json
 */
async function apiManagementListNotifications() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.notification.listByService(resourceGroupName, serviceName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

apiManagementListNotifications().catch(console.error);
