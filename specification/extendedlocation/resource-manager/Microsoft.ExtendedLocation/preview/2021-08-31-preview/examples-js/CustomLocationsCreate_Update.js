const { CustomLocationsManagementClient } = require("@azure/arm-extendedlocation");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a Custom Location in the specified Subscription and Resource Group
 *
 * @summary Creates or updates a Custom Location in the specified Subscription and Resource Group
 * x-ms-original-file: specification/extendedlocation/resource-manager/Microsoft.ExtendedLocation/preview/2021-08-31-preview/examples/CustomLocationsCreate_Update.json
 */
async function createOrUpdateCustomLocation() {
  const subscriptionId = "11111111-2222-3333-4444-555555555555";
  const resourceGroupName = "testresourcegroup";
  const resourceName = "customLocation01";
  const parameters = {
    authentication: { type: "KubeConfig", value: "<base64 KubeConfig>" },
    clusterExtensionIds: [
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedCluster/someCluster/Microsoft.KubernetesConfiguration/clusterExtensions/fooExtension",
    ],
    displayName: "customLocationLocation01",
    hostResourceId:
      "/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/testresourcegroup/providers/Microsoft.ContainerService/managedClusters/cluster01",
    identity: { type: "SystemAssigned" },
    location: "West US",
    namespace: "namespace01",
  };
  const credential = new DefaultAzureCredential();
  const client = new CustomLocationsManagementClient(credential, subscriptionId);
  const result = await client.customLocations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    parameters
  );
  console.log(result);
}

createOrUpdateCustomLocation().catch(console.error);
