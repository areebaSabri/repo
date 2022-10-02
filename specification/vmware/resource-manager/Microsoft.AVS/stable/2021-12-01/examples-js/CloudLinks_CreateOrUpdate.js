const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update a cloud link in a private cloud
 *
 * @summary Create or update a cloud link in a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/CloudLinks_CreateOrUpdate.json
 */
async function cloudLinksCreateOrUpdate() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const cloudLinkName = "cloudLink1";
  const cloudLink = {
    linkedCloud:
      "/subscriptions/12341234-1234-1234-1234-123412341234/resourceGroups/mygroup/providers/Microsoft.AVS/privateClouds/cloud2",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.cloudLinks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    cloudLinkName,
    cloudLink
  );
  console.log(result);
}

cloudLinksCreateOrUpdate().catch(console.error);
