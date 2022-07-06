const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get information related to a specific group in the project. Returns a json object of type 'group' as specified in the models section.
 *
 * @summary Get information related to a specific group in the project. Returns a json object of type 'group' as specified in the models section.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/Groups_Get.json
 */
async function groupsGet() {
  const subscriptionId = "6393a73f-8d55-47ef-b6dd-179b3e0c7910";
  const resourceGroupName = "abgoyal-westEurope";
  const projectName = "abgoyalWEselfhostb72bproject";
  const groupName = "Test1";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.groups.get(resourceGroupName, projectName, groupName);
  console.log(result);
}

groupsGet().catch(console.error);
