const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the SAP Central Instance.
 *
 * @summary Gets the SAP Central Instance.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/sapvirtualinstances/SAPCentralInstances_Get.json
 */
async function sapCentralInstancesGet() {
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const resourceGroupName = "test-rg";
  const sapVirtualInstanceName = "X00";
  const centralInstanceName = "centralServer";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPCentralInstances.get(
    resourceGroupName,
    sapVirtualInstanceName,
    centralInstanceName
  );
  console.log(result);
}

sapCentralInstancesGet().catch(console.error);
