const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or Update VMware collector
 *
 * @summary Create or Update VMware collector
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/VMwareCollectors_Create.json
 */
async function vMwareCollectorsCreate() {
  const subscriptionId = "6393a73f-8d55-47ef-b6dd-179b3e0c7910";
  const resourceGroupName = "abgoyal-westEurope";
  const projectName = "abgoyalWEselfhostb72bproject";
  const vmWareCollectorName = "PortalvCenterbc2fcollector";
  const collectorBody = {
    eTag: '"01003d32-0000-0d00-0000-5d74d2e50000"',
    properties: {
      agentProperties: {
        spnDetails: {
          applicationId: "fc717575-8173-4b21-92a5-658b655e613e",
          audience: "https://72f988bf-86f1-41af-91ab-2d7cd011db47/PortalvCenterbc2fagentauthaadapp",
          authority: "https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47",
          objectId: "29d94f38-db94-4980-aec0-0cfd55ab1cd0",
          tenantId: "72f988bf-86f1-41af-91ab-2d7cd011db47",
        },
      },
      discoverySiteId:
        "/subscriptions/6393a73f-8d55-47ef-b6dd-179b3e0c7910/resourceGroups/abgoyal-westEurope/providers/Microsoft.OffAzure/VMwareSites/PortalvCenterbc2fsite",
    },
  };
  const options = { collectorBody };
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.vMwareCollectors.create(
    resourceGroupName,
    projectName,
    vmWareCollectorName,
    options
  );
  console.log(result);
}

vMwareCollectorsCreate().catch(console.error);
