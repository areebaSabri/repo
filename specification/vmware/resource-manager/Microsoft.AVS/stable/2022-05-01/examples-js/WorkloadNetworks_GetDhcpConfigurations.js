const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get dhcp by id in a private cloud workload network.
 *
 * @summary Get dhcp by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2022-05-01/examples/WorkloadNetworks_GetDhcpConfigurations.json
 */
async function workloadNetworksGetDhcp() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "group1";
  const dhcpId = "dhcp1";
  const privateCloudName = "cloud1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.getDhcp(resourceGroupName, dhcpId, privateCloudName);
  console.log(result);
}

workloadNetworksGetDhcp().catch(console.error);
