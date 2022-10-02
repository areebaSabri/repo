const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update a private cloud
 *
 * @summary Create or update a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/PrivateClouds_CreateOrUpdate.json
 */
async function privateCloudsCreateOrUpdate() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const privateCloud = {
    identity: { type: "SystemAssigned" },
    location: "eastus2",
    managementCluster: { clusterSize: 4 },
    networkBlock: "192.168.48.0/22",
    sku: { name: "AV36" },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.privateClouds.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    privateCloud
  );
  console.log(result);
}

privateCloudsCreateOrUpdate().catch(console.error);
