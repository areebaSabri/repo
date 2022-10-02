const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a Public IP Block by id in a private cloud workload network.
 *
 * @summary Get a Public IP Block by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/WorkloadNetworks_GetPublicIPs.json
 */
async function workloadNetworksGetPublicIP() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const publicIPId = "publicIP1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.getPublicIP(
    resourceGroupName,
    privateCloudName,
    publicIPId
  );
  console.log(result);
}

workloadNetworksGetPublicIP().catch(console.error);
