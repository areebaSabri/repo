const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete a VMware collector from the project.
 *
 * @summary Delete a VMware collector from the project.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/VMwareCollectors_Delete.json
 */
async function vMwareCollectorsDelete() {
  const subscriptionId = "6393a73f-8d55-47ef-b6dd-179b3e0c7910";
  const resourceGroupName = "abgoyal-westEurope";
  const projectName = "abgoyalWEselfhostb72bproject";
  const vmWareCollectorName = "PortalvCenterbc2fcollector";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.vMwareCollectors.delete(
    resourceGroupName,
    projectName,
    vmWareCollectorName
  );
  console.log(result);
}

vMwareCollectorsDelete().catch(console.error);
