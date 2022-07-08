const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List the workflow run action scoped repetitions.
 *
 * @summary List the workflow run action scoped repetitions.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/WorkflowRunActionScopeRepetitions_List.json
 */
async function listTheScopedRepetitions() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testResourceGroup";
  const name = "test-name";
  const workflowName = "testFlow";
  const runName = "08586776228332053161046300351";
  const actionName = "for_each";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workflowRunActionScopeRepetitions.list(
    resourceGroupName,
    name,
    workflowName,
    runName,
    actionName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listTheScopedRepetitions().catch(console.error);
