const { DeveloperHubServiceClient } = require("@azure/arm-devhub");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a list of workflows associated with the specified subscription.
 *
 * @summary Gets a list of workflows associated with the specified subscription.
 * x-ms-original-file: specification/developerhub/resource-manager/Microsoft.DevHub/preview/2022-04-01-preview/examples/Workflow_List.json
 */
async function listWorkflows() {
  const subscriptionId = "subscriptionId1";
  const credential = new DefaultAzureCredential();
  const client = new DeveloperHubServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workflowOperations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listWorkflows().catch(console.error);
