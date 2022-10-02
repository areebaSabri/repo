const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the entity state (Etag) version of the issue Attachment for an API specified by its identifier.
 *
 * @summary Gets the entity state (Etag) version of the issue Attachment for an API specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementHeadApiIssueAttachment.json
 */
async function apiManagementHeadApiIssueAttachment() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "57d2ef278aa04f0888cba3f3";
  const issueId = "57d2ef278aa04f0ad01d6cdc";
  const attachmentId = "57d2ef278aa04f0888cba3f3";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiIssueAttachment.getEntityTag(
    resourceGroupName,
    serviceName,
    apiId,
    issueId,
    attachmentId
  );
  console.log(result);
}

apiManagementHeadApiIssueAttachment().catch(console.error);
