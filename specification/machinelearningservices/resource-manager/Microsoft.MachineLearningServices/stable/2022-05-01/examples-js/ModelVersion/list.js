const { AzureMachineLearningWorkspaces } = require("@azure/arm-machinelearning");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List model versions.
 *
 * @summary List model versions.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2022-05-01/examples/ModelVersion/list.json
 */
async function listModelVersion() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "test-rg";
  const workspaceName = "my-aml-workspace";
  const name = "string";
  const orderBy = "string";
  const top = 1;
  const version = "string";
  const description = "string";
  const offset = 1;
  const tags = "string";
  const properties = "string";
  const options = {
    orderBy,
    top,
    version,
    description,
    offset,
    tags,
    properties,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.modelVersions.list(
    resourceGroupName,
    workspaceName,
    name,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listModelVersion().catch(console.error);
