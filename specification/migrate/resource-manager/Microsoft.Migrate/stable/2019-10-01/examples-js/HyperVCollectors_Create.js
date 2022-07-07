const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or Update Hyper-V collector
 *
 * @summary Create or Update Hyper-V collector
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/HyperVCollectors_Create.json
 */
async function hyperVCollectorsCreate() {
  const subscriptionId = "8c3c936a-c09b-4de3-830b-3f5f244d72e9";
  const resourceGroupName = "contosoithyperv";
  const projectName = "migrateprojectce73project";
  const hyperVCollectorName = "migrateprojectce73collector";
  const collectorBody = {
    eTag: '"00000981-0000-0300-0000-5d74cd5f0000"',
    properties: {
      agentProperties: {
        spnDetails: {
          applicationId: "827f1053-44dc-439f-b832-05416dcce12b",
          audience:
            "https://72f988bf-86f1-41af-91ab-2d7cd011db47/migrateprojectce73agentauthaadapp",
          authority: "https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47",
          objectId: "be75098e-c0fc-4ac4-98c7-282ebbcf8370",
          tenantId: "72f988bf-86f1-41af-91ab-2d7cd011db47",
        },
      },
      discoverySiteId:
        "/subscriptions/8c3c936a-c09b-4de3-830b-3f5f244d72e9/resourceGroups/ContosoITHyperV/providers/Microsoft.OffAzure/HyperVSites/migrateprojectce73site",
    },
  };
  const options = { collectorBody };
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.hyperVCollectors.create(
    resourceGroupName,
    projectName,
    hyperVCollectorName,
    options
  );
  console.log(result);
}

hyperVCollectorsCreate().catch(console.error);
