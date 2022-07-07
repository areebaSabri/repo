const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get information related to a specific private Link Resource in the project. Returns a json object of type 'privateLinkResources' as specified in the models section.
 *
 * @summary Get information related to a specific private Link Resource in the project. Returns a json object of type 'privateLinkResources' as specified in the models section.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/PrivateLinkResources_Get.json
 */
async function privateLinkResourcesGet() {
  const subscriptionId = "4bd2aa0f-2bd2-4d67-91a8-5a4533d58600";
  const resourceGroupName = "madhavicus";
  const projectName = "custestpece80project";
  const privateLinkResourceName = "Default";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.privateLinkResourceOperations.get(
    resourceGroupName,
    projectName,
    privateLinkResourceName
  );
  console.log(result);
}

privateLinkResourcesGet().catch(console.error);
