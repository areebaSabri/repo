const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the machine with the specified name. Returns a json object of type 'machine' defined in Models section.
 *
 * @summary Get the machine with the specified name. Returns a json object of type 'machine' defined in Models section.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/Machines_Get.json
 */
async function machinesGet() {
  const subscriptionId = "6393a73f-8d55-47ef-b6dd-179b3e0c7910";
  const resourceGroupName = "abgoyal-westEurope";
  const projectName = "abgoyalWEselfhostb72bproject";
  const machineName = "269ef295-a38d-4f8f-9779-77ce79088311";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.machines.get(resourceGroupName, projectName, machineName);
  console.log(result);
}

machinesGet().catch(console.error);
