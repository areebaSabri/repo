const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create a new group by sending a json object of type 'group' as given in Models section as part of the Request Body. The group name in a project is unique.

This operation is Idempotent.

 *
 * @summary Create a new group by sending a json object of type 'group' as given in Models section as part of the Request Body. The group name in a project is unique.

This operation is Idempotent.

 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/Groups_Create.json
 */
async function groupsCreate() {
  const subscriptionId = "6393a73f-8d55-47ef-b6dd-179b3e0c7910";
  const resourceGroupName = "abgoyal-westEurope";
  const projectName = "abgoyalWEselfhostb72bproject";
  const groupName = "Group2";
  const group = {
    eTag: '"1e000c2c-0000-0d00-0000-5cdaa4190000"',
    properties: {},
  };
  const options = { group };
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.groups.create(resourceGroupName, projectName, groupName, options);
  console.log(result);
}

groupsCreate().catch(console.error);
