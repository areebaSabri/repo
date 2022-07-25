const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates a task run with the specified parameters.
 *
 * @summary Updates a task run with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/TaskRunsUpdate.json
 */
async function taskRunsUpdate() {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const taskRunName = "myRun";
  const updateParameters = {
    forceUpdateTag: "test",
    runRequest: {
      type: "EncodedTaskRunRequest",
      credentials: {},
      encodedTaskContent: "c3RlcHM6IAogIC0gY21kOiB7eyAuVmFsdWVzLmNvbW1hbmQgfX0K",
      encodedValuesContent: "Y29tbWFuZDogYmFzaCBlY2hvIHt7LlJ1bi5SZWdpc3RyeX19Cg==",
      isArchiveEnabled: true,
      platform: { architecture: "amd64", os: "Linux" },
      values: [],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.taskRuns.beginUpdateAndWait(
    resourceGroupName,
    registryName,
    taskRunName,
    updateParameters
  );
  console.log(result);
}

taskRunsUpdate().catch(console.error);
