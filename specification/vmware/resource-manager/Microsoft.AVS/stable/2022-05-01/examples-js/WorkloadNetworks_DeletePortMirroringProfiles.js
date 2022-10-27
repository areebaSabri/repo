const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete a port mirroring profile by id in a private cloud workload network.
 *
 * @summary Delete a port mirroring profile by id in a private cloud workload network.
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2022-05-01/examples/WorkloadNetworks_DeletePortMirroringProfiles.json
 */
async function workloadNetworksDeletePortMirroring() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "group1";
  const portMirroringId = "portMirroring1";
  const privateCloudName = "cloud1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginDeletePortMirroringAndWait(
    resourceGroupName,
    portMirroringId,
    privateCloudName
  );
  console.log(result);
}

workloadNetworksDeletePortMirroring().catch(console.error);
