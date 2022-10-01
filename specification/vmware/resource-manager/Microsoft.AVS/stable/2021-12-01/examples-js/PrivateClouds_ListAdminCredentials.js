const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List the admin credentials for the private cloud
 *
 * @summary List the admin credentials for the private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/PrivateClouds_ListAdminCredentials.json
 */
async function privateCloudsListAdminCredentials() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.privateClouds.listAdminCredentials(
    resourceGroupName,
    privateCloudName
  );
  console.log(result);
}

privateCloudsListAdminCredentials().catch(console.error);
