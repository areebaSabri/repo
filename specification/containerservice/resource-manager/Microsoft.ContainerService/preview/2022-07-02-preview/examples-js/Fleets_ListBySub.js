const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists fleets in the specified subscription.
 *
 * @summary Lists fleets in the specified subscription.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-07-02-preview/examples/Fleets_ListBySub.json
 */
async function listFleetResourcesInAGivenSubscription() {
  const subscriptionId = "subid1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.fleets.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listFleetResourcesInAGivenSubscription().catch(console.error);
