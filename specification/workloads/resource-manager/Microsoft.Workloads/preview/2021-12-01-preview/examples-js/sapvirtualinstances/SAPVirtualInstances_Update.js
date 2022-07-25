const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates an Virtual Instance for SAP.
 *
 * @summary Updates an Virtual Instance for SAP.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/sapvirtualinstances/SAPVirtualInstances_Update.json
 */
async function sapVirtualInstancesUpdate() {
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const resourceGroupName = "test-rg";
  const sapVirtualInstanceName = "X00";
  const body = {
    identity: { type: "None" },
    tags: { key1: "svi1" },
  };
  const options = { body };
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPVirtualInstances.update(
    resourceGroupName,
    sapVirtualInstanceName,
    options
  );
  console.log(result);
}

sapVirtualInstancesUpdate().catch(console.error);
