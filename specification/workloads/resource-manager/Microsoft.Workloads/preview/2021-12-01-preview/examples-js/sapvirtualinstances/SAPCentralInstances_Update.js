const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates the SAP Central Instance. <br><br>This can be used to update tags.
 *
 * @summary Updates the SAP Central Instance. <br><br>This can be used to update tags.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/sapvirtualinstances/SAPCentralInstances_Update.json
 */
async function sapCentralInstancesUpdate() {
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const resourceGroupName = "test-rg";
  const sapVirtualInstanceName = "X00";
  const centralInstanceName = "centralServer";
  const body = { tags: { tag1: "value1" } };
  const options = { body };
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPCentralInstances.beginUpdateAndWait(
    resourceGroupName,
    sapVirtualInstanceName,
    centralInstanceName,
    options
  );
  console.log(result);
}

sapCentralInstancesUpdate().catch(console.error);
