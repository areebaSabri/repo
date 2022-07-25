const { CustomLocationsManagementClient } = require("@azure/arm-extendedlocation");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a Resource Sync Rule in the parent Custom Location, Subscription Id and Resource Group
 *
 * @summary Creates or updates a Resource Sync Rule in the parent Custom Location, Subscription Id and Resource Group
 * x-ms-original-file: specification/extendedlocation/resource-manager/Microsoft.ExtendedLocation/preview/2021-08-31-preview/examples/ResourceSyncRulesCreate_Update.json
 */
async function createOrUpdateResourceSyncRule() {
  const subscriptionId = "11111111-2222-3333-4444-555555555555";
  const resourceGroupName = "testresourcegroup";
  const resourceName = "customLocation01";
  const childResourceName = "resourceSyncRule01";
  const parameters = {
    location: "West US",
    priority: 999,
    selector: {
      matchExpressions: [{ key: "key4", operator: "In", values: ["value4"] }],
      matchLabels: { key1: "value1" },
    },
    targetResourceGroup:
      "/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/testresourcegroup",
  };
  const credential = new DefaultAzureCredential();
  const client = new CustomLocationsManagementClient(credential, subscriptionId);
  const result = await client.resourceSyncRules.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    childResourceName,
    parameters
  );
  console.log(result);
}

createOrUpdateResourceSyncRule().catch(console.error);
