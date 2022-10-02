const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Rotate the NSX-T Manager password
 *
 * @summary Rotate the NSX-T Manager password
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/PrivateClouds_RotateNsxtPassword.json
 */
async function privateCloudsRotateNsxtPassword() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.privateClouds.beginRotateNsxtPasswordAndWait(
    resourceGroupName,
    privateCloudName
  );
  console.log(result);
}

privateCloudsRotateNsxtPassword().catch(console.error);
