const { AzureMachineLearningWorkspaces } = require("@azure/arm-machinelearning");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete Online Endpoint (asynchronous).
 *
 * @summary Delete Online Endpoint (asynchronous).
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2022-05-01/examples/OnlineEndpoint/delete.json
 */
async function deleteOnlineEndpoint() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "test-rg";
  const workspaceName = "my-aml-workspace";
  const endpointName = "testEndpointName";
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const result = await client.onlineEndpoints.beginDeleteAndWait(
    resourceGroupName,
    workspaceName,
    endpointName
  );
  console.log(result);
}

deleteOnlineEndpoint().catch(console.error);
