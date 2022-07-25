const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the SAP Database Instances in an SVI.
 *
 * @summary Lists the SAP Database Instances in an SVI.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/sapvirtualinstances/SAPDatabaseInstances_List.json
 */
async function sapDatabaseInstancesList() {
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const resourceGroupName = "test-rg";
  const sapVirtualInstanceName = "X00";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.sAPDatabaseInstances.list(
    resourceGroupName,
    sapVirtualInstanceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

sapDatabaseInstancesList().catch(console.error);
