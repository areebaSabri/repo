const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a new Attachment for the Issue in an API or updates an existing one.
 *
 * @summary Creates a new Attachment for the Issue in an API or updates an existing one.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementCreateApiIssueAttachment.json
 */
async function apiManagementCreateApiIssueAttachment() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "57d1f7558aa04f15146d9d8a";
  const issueId = "57d2ef278aa04f0ad01d6cdc";
  const attachmentId = "57d2ef278aa04f0888cba3f3";
  const parameters = {
    content: "IEJhc2U2NA==",
    contentFormat: "image/jpeg",
    title: "Issue attachment.",
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiIssueAttachment.createOrUpdate(
    resourceGroupName,
    serviceName,
    apiId,
    issueId,
    attachmentId,
    parameters
  );
  console.log(result);
}

apiManagementCreateApiIssueAttachment().catch(console.error);
