const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create dhcp by id in a private cloud workload network.
 *
 * @summary Create dhcp by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/WorkloadNetworks_CreateDhcpConfigurations.json
 */
async function workloadNetworksCreateDhcp() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const dhcpId = "dhcp1";
  const workloadNetworkDhcp = {
    properties: {
      dhcpType: "SERVER",
      displayName: "dhcpConfigurations1",
      leaseTime: 86400,
      revision: 1,
      serverAddress: "40.1.5.1/24",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginCreateDhcpAndWait(
    resourceGroupName,
    privateCloudName,
    dhcpId,
    workloadNetworkDhcp
  );
  console.log(result);
}

workloadNetworksCreateDhcp().catch(console.error);
