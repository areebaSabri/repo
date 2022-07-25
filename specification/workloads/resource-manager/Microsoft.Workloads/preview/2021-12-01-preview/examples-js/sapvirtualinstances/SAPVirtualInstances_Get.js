const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets an Virtual Instance for SAP.
 *
 * @summary Gets an Virtual Instance for SAP.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/sapvirtualinstances/SAPVirtualInstances_Get.json
 */
async function sapVirtualInstancesGet() {
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const resourceGroupName = "test-rg";
  const sapVirtualInstanceName = "X00";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPVirtualInstances.get(resourceGroupName, sapVirtualInstanceName);
  console.log(result);
}

sapVirtualInstancesGet().catch(console.error);
