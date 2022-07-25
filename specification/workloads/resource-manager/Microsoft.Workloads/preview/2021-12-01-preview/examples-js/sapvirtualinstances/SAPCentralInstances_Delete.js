const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes the SAP Central Instance. <br><br>This will be used by service only. Delete by end user will return a Bad Request error.
 *
 * @summary Deletes the SAP Central Instance. <br><br>This will be used by service only. Delete by end user will return a Bad Request error.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/sapvirtualinstances/SAPCentralInstances_Delete.json
 */
async function sapCentralInstancesDelete() {
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const resourceGroupName = "test-rg";
  const sapVirtualInstanceName = "X00";
  const centralInstanceName = "centralServer";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPCentralInstances.beginDeleteAndWait(
    resourceGroupName,
    sapVirtualInstanceName,
    centralInstanceName
  );
  console.log(result);
}

sapCentralInstancesDelete().catch(console.error);
