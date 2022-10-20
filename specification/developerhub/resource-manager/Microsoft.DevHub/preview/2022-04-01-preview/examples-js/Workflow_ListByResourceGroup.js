const { DeveloperHubServiceClient } = require("@azure/arm-devhub");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a list of workflows within a resource group.
 *
 * @summary Gets a list of workflows within a resource group.
 * x-ms-original-file: specification/developerhub/resource-manager/Microsoft.DevHub/preview/2022-04-01-preview/examples/Workflow_ListByResourceGroup.json
 */
async function listWorkflows() {
  const subscriptionId = "subscriptionId1";
  const resourceGroupName = "resourceGroup1";
  const managedClusterResource =
    "/subscriptions/subscriptionId1/resourcegroups/resourceGroup1/providers/Microsoft.ContainerService/managedClusters/cluster1";
  const options = {
    managedClusterResource,
  };
  const credential = new DefaultAzureCredential();
  const client = new DeveloperHubServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workflowOperations.listByResourceGroup(
    resourceGroupName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listWorkflows().catch(console.error);
