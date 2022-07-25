const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get SAP Disk Configurations.
 *
 * @summary Get SAP Disk Configurations.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/sapvirtualinstances/SAPDiskConfigurations_Prod.json
 */
async function sapDiskConfigurationsProd() {
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const location = "centralus";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPDiskConfigurations(location);
  console.log(result);
}

sapDiskConfigurationsProd().catch(console.error);
