const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a workflow trigger history.
 *
 * @summary Gets a workflow trigger history.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/WorkflowTriggerHistories_Get.json
 */
async function getAWorkflowTriggerHistory() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testResourceGroup";
  const name = "test-name";
  const workflowName = "testWorkflowName";
  const triggerName = "testTriggerName";
  const historyName = "08586676746934337772206998657CU22";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.workflowTriggerHistories.get(
    resourceGroupName,
    name,
    workflowName,
    triggerName,
    historyName
  );
  console.log(result);
}

getAWorkflowTriggerHistory().catch(console.error);
