const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists fleets in the specified subscription and resource group.
 *
 * @summary Lists fleets in the specified subscription and resource group.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/Fleets_ListByResourceGroup.json
 */
async function listFleetResourcesInAGivenResourceGroup() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.fleets.listByResourceGroup(resourceGroupName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listFleetResourcesInAGivenResourceGroup().catch(console.error);
