const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Return trial status for subscription by region
 *
 * @summary Return trial status for subscription by region
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/Locations_CheckTrialAvailability.json
 */
async function locationsCheckTrialAvailability() {
  const subscriptionId = "{subscription-id}";
  const location = "eastus";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.locations.checkTrialAvailability(location);
  console.log(result);
}

locationsCheckTrialAvailability().catch(console.error);
