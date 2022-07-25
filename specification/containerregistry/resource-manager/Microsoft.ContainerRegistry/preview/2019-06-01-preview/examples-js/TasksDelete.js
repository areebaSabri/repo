const { ContainerRegistryManagementClient } = require("@azure/arm-containerregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes a specified task.
 *
 * @summary Deletes a specified task.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/TasksDelete.json
 */
async function tasksDelete() {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const taskName = "myTask";
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.tasks.beginDeleteAndWait(resourceGroupName, registryName, taskName);
  console.log(result);
}

tasksDelete().catch(console.error);
