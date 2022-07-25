const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Puts the SAP Database Instance.
 *
 * @summary Puts the SAP Database Instance.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/sapvirtualinstances/SAPDatabaseInstances_Update.json
 */
async function sapDatabaseInstancesUpdate() {
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const resourceGroupName = "test-rg";
  const sapVirtualInstanceName = "X00";
  const databaseInstanceName = "databaseServer";
  const body = { tags: { key1: "value1" } };
  const options = { body };
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPDatabaseInstances.beginUpdateAndWait(
    resourceGroupName,
    sapVirtualInstanceName,
    databaseInstanceName,
    options
  );
  console.log(result);
}

sapDatabaseInstancesUpdate().catch(console.error);
