const { CommunicationServiceManagementClient } = require("@azure/arm-communication");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the EmailService and its properties.
 *
 * @summary Get the EmailService and its properties.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2022-07-01-preview/examples/emailServices/get.json
 */
async function getEmailServiceResource() {
  const subscriptionId = "12345";
  const resourceGroupName = "MyResourceGroup";
  const emailServiceName = "MyEmailServiceResource";
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(credential, subscriptionId);
  const result = await client.emailServices.get(resourceGroupName, emailServiceName);
  console.log(result);
}

getEmailServiceResource().catch(console.error);
