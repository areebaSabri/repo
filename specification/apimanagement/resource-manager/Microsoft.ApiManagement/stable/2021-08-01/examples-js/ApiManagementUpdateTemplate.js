const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates API Management email template
 *
 * @summary Updates API Management email template
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementUpdateTemplate.json
 */
async function apiManagementUpdateTemplate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const templateName = "newIssueNotificationMessage";
  const ifMatch = "*";
  const parameters = {
    body: '<!DOCTYPE html ><html>  <head />  <body>    <p style="font-size:12pt;font-family:\'Segoe UI\'">Dear $DevFirstName $DevLastName,</p>    <p style="font-size:12pt;font-family:\'Segoe UI\'">          We are happy to let you know that your request to publish the $AppName application in the gallery has been approved. Your application has been published and can be viewed <a href="http://$DevPortalUrl/Applications/Details/$AppId">here</a>.        </p>    <p style="font-size:12pt;font-family:\'Segoe UI\'">Best,</p>    <p style="font-size:12pt;font-family:\'Segoe UI\'">The $OrganizationName API Team</p>  </body></html>',
    subject: "Your request $IssueName was received",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.emailTemplate.update(
    resourceGroupName,
    serviceName,
    templateName,
    ifMatch,
    parameters
  );
  console.log(result);
}

apiManagementUpdateTemplate().catch(console.error);
