const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update a placement policy in a private cloud cluster
 *
 * @summary Update a placement policy in a private cloud cluster
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/PlacementPolicies_Update.json
 */
async function placementPoliciesUpdate() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const clusterName = "cluster1";
  const placementPolicyName = "policy1";
  const placementPolicyUpdate = {
    hostMembers: [
      "fakehost22.nyc1.kubernetes.center",
      "fakehost23.nyc1.kubernetes.center",
      "fakehost24.nyc1.kubernetes.center",
    ],
    state: "Disabled",
    vmMembers: [
      "/subscriptions/{subscription-id}/resourceGroups/group1/providers/Microsoft.AVS/privateClouds/cloud1/clusters/cluster1/virtualMachines/vm-128",
      "/subscriptions/{subscription-id}/resourceGroups/group1/providers/Microsoft.AVS/privateClouds/cloud1/clusters/cluster1/virtualMachines/vm-256",
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.placementPolicies.beginUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    clusterName,
    placementPolicyName,
    placementPolicyUpdate
  );
  console.log(result);
}

placementPoliciesUpdate().catch(console.error);
