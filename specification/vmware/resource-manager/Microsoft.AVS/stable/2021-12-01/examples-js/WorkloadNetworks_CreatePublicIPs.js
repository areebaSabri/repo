const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create a Public IP Block by id in a private cloud workload network.
 *
 * @summary Create a Public IP Block by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/WorkloadNetworks_CreatePublicIPs.json
 */
async function workloadNetworksCreatePublicIP() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const publicIPId = "publicIP1";
  const workloadNetworkPublicIP = {
    displayName: "publicIP1",
    numberOfPublicIPs: 32,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginCreatePublicIPAndWait(
    resourceGroupName,
    privateCloudName,
    publicIPId,
    workloadNetworkPublicIP
  );
  console.log(result);
}

workloadNetworksCreatePublicIP().catch(console.error);
