const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List of DNS zones in a private cloud workload network.
 *
 * @summary List of DNS zones in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/WorkloadNetworks_ListDnsZones.json
 */
async function workloadNetworksListDnsZones() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workloadNetworks.listDnsZones(
    resourceGroupName,
    privateCloudName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

workloadNetworksListDnsZones().catch(console.error);
