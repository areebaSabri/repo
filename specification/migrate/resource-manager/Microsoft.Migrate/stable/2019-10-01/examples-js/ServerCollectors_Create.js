const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or Update Server collector
 *
 * @summary Create or Update Server collector
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/ServerCollectors_Create.json
 */
async function serverCollectorsCreate() {
  const subscriptionId = "4bd2aa0f-2bd2-4d67-91a8-5a4533d58600";
  const resourceGroupName = "pajindtest";
  const projectName = "app11141project";
  const serverCollectorName = "app23df4collector";
  const collectorBody = {
    eTag: '"00000606-0000-0d00-0000-605999bf0000"',
    properties: {
      agentProperties: {
        spnDetails: {
          applicationId: "ad9f701a-cc08-4421-b51f-b5762d58e9ba",
          audience: "https://72f988bf-86f1-41af-91ab-2d7cd011db47/app23df4authandaccessaadapp",
          authority: "https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47",
          objectId: "b4975e42-9248-4a36-b99f-37eca377ea00",
          tenantId: "72f988bf-86f1-41af-91ab-2d7cd011db47",
        },
      },
      discoverySiteId:
        "/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourceGroups/pajindTest/providers/Microsoft.OffAzure/ServerSites/app21141site",
    },
  };
  const options = { collectorBody };
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.serverCollectors.create(
    resourceGroupName,
    projectName,
    serverCollectorName,
    options
  );
  console.log(result);
}

serverCollectorsCreate().catch(console.error);
