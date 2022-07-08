const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Runs a workflow trigger.
 *
 * @summary Runs a workflow trigger.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/WorkflowTriggers_Run.json
 */
async function runAWorkflowTrigger() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "test-resource-group";
  const name = "test-name";
  const workflowName = "test-workflow";
  const triggerName = "manual";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.workflowTriggers.beginRunAndWait(
    resourceGroupName,
    name,
    workflowName,
    triggerName
  );
  console.log(result);
}

runAWorkflowTrigger().catch(console.error);
