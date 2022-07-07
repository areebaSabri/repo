const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get all private link resources created in the project. Returns a json array of objects of type 'privateLinkResources' as specified in the Models section.
 *
 * @summary Get all private link resources created in the project. Returns a json array of objects of type 'privateLinkResources' as specified in the Models section.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/PrivateLinkResources_ListByProject.json
 */
async function privateLinkResourcesListByProject() {
  const subscriptionId = "4bd2aa0f-2bd2-4d67-91a8-5a4533d58600";
  const resourceGroupName = "madhavicus";
  const projectName = "custestpece80project";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.privateLinkResourceOperations.listByProject(
    resourceGroupName,
    projectName
  );
  console.log(result);
}

privateLinkResourcesListByProject().catch(console.error);
