const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get SAP Availability Zone Details.
 *
 * @summary Get SAP Availability Zone Details.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/sapvirtualinstances/SAPAvailabilityZoneDetails_eastus.json
 */
async function sapAvailabilityZoneDetailsEastus() {
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPAvailabilityZoneDetails(location);
  console.log(result);
}

sapAvailabilityZoneDetailsEastus().catch(console.error);
