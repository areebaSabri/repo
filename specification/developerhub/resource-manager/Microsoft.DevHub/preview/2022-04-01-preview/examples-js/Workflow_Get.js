const { DeveloperHubServiceClient } = require("@azure/arm-devhub");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a workflow.
 *
 * @summary Gets a workflow.
 * x-ms-original-file: specification/developerhub/resource-manager/Microsoft.DevHub/preview/2022-04-01-preview/examples/Workflow_Get.json
 */
async function getWorkflow() {
  const subscriptionId = "subscriptionId1";
  const resourceGroupName = "resourceGroup1";
  const workflowName = "workflow1";
  const credential = new DefaultAzureCredential();
  const client = new DeveloperHubServiceClient(credential, subscriptionId);
  const result = await client.workflowOperations.get(resourceGroupName, workflowName);
  console.log(result);
}

getWorkflow().catch(console.error);
