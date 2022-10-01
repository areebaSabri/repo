const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Return quota for subscription by region
 *
 * @summary Return quota for subscription by region
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/Locations_CheckQuotaAvailability.json
 */
async function locationsCheckQuotaAvailability() {
  const subscriptionId = "{subscription-id}";
  const location = "eastus";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.locations.checkQuotaAvailability(location);
  console.log(result);
}

locationsCheckQuotaAvailability().catch(console.error);
