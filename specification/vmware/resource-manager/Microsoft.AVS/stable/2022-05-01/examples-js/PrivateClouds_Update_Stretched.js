const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update a private cloud
 *
 * @summary Update a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2022-05-01/examples/PrivateClouds_Update_Stretched.json
 */
async function privateCloudsUpdateStretched() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const privateCloudUpdate = {
    managementCluster: { clusterSize: 4 },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.privateClouds.beginUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    privateCloudUpdate
  );
  console.log(result);
}

privateCloudsUpdateStretched().catch(console.error);
