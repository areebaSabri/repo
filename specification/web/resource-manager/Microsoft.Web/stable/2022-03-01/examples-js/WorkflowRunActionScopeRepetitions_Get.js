const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a workflow run action scoped repetition.
 *
 * @summary Get a workflow run action scoped repetition.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/WorkflowRunActionScopeRepetitions_Get.json
 */
async function getAScopedRepetition() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testResourceGroup";
  const name = "test-name";
  const workflowName = "testFlow";
  const runName = "08586776228332053161046300351";
  const actionName = "for_each";
  const repetitionName = "000000";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.workflowRunActionScopeRepetitions.get(
    resourceGroupName,
    name,
    workflowName,
    runName,
    actionName,
    repetitionName
  );
  console.log(result);
}

getAScopedRepetition().catch(console.error);
