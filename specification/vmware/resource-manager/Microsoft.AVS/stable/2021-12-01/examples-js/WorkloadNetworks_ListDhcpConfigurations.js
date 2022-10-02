const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List dhcp in a private cloud workload network.
 *
 * @summary List dhcp in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/WorkloadNetworks_ListDhcpConfigurations.json
 */
async function workloadNetworksListDhcp() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workloadNetworks.listDhcp(resourceGroupName, privateCloudName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

workloadNetworksListDhcp().catch(console.error);
