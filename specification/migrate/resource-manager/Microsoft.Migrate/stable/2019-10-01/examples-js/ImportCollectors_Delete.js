const { AzureMigrateV2 } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete a Import collector from the project.
 *
 * @summary Delete a Import collector from the project.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/ImportCollectors_Delete.json
 */
async function importCollectorsDelete() {
  const subscriptionId = "31be0ff4-c932-4cb3-8efc-efa411d79280";
  const resourceGroupName = "markusavstestrg";
  const projectName = "rajoshCCY9671project";
  const importCollectorName = "importCollector2952";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.importCollectors.delete(
    resourceGroupName,
    projectName,
    importCollectorName
  );
  console.log(result);
}

importCollectorsDelete().catch(console.error);
