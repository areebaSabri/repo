const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances.
 *
 * @summary Gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/workloadmonitor/ProviderInstances_List.json
 */
async function listAllSapMonitorsProvidersInASubscription() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "mySapMonitor";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.providerInstances.list(resourceGroupName, monitorName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllSapMonitorsProvidersInASubscription().catch(console.error);
