const { AzureMachineLearningWorkspaces } = require("@azure/arm-machinelearning");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to
 *
 * @summary
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2022-05-01/examples/WorkspaceConnection/list.json
 */
async function listWorkspaceConnections() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "resourceGroup-1";
  const workspaceName = "workspace-1";
  const target = "www.facebook.com";
  const category = "ContainerRegistry";
  const options = { target, category };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workspaceConnections.list(
    resourceGroupName,
    workspaceName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listWorkspaceConnections().catch(console.error);
