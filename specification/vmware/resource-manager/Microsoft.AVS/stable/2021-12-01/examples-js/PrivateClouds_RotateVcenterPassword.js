const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Rotate the vCenter password
 *
 * @summary Rotate the vCenter password
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/PrivateClouds_RotateVcenterPassword.json
 */
async function privateCloudsRotateVcenterPassword() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.privateClouds.beginRotateVcenterPasswordAndWait(
    resourceGroupName,
    privateCloudName
  );
  console.log(result);
}

privateCloudsRotateVcenterPassword().catch(console.error);
