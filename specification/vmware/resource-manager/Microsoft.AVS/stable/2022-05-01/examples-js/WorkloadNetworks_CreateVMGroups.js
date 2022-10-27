const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create a vm group by id in a private cloud workload network.
 *
 * @summary Create a vm group by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2022-05-01/examples/WorkloadNetworks_CreateVMGroups.json
 */
async function workloadNetworksCreateVMGroup() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const vmGroupId = "vmGroup1";
  const workloadNetworkVMGroup = {
    displayName: "vmGroup1",
    members: ["564d43da-fefc-2a3b-1d92-42855622fa50"],
    revision: 1,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginCreateVMGroupAndWait(
    resourceGroupName,
    privateCloudName,
    vmGroupId,
    workloadNetworkVMGroup
  );
  console.log(result);
}

workloadNetworksCreateVMGroup().catch(console.error);
