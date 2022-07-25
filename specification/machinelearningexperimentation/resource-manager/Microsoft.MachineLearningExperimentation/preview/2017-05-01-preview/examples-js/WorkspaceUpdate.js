const { MLTeamAccountManagementClient } = require("@azure/arm-machinelearningexperimentation");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates a machine learning workspace with the specified parameters.
 *
 * @summary Updates a machine learning workspace with the specified parameters.
 * x-ms-original-file: specification/machinelearningexperimentation/resource-manager/Microsoft.MachineLearningExperimentation/preview/2017-05-01-preview/examples/WorkspaceUpdate.json
 */
async function workspaceUpdate() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "accountcrud-1234";
  const accountName = "accountcrud5678";
  const workspaceName = "testworkspace";
  const parameters = { friendlyName: "testNameNew" };
  const credential = new DefaultAzureCredential();
  const client = new MLTeamAccountManagementClient(credential, subscriptionId);
  const result = await client.workspaces.update(
    resourceGroupName,
    accountName,
    workspaceName,
    parameters
  );
  console.log(result);
}

workspaceUpdate().catch(console.error);
