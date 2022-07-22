const { BatchManagementClient } = require("@azure/arm-batch");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates settings for the specified application.
 *
 * @summary Updates settings for the specified application.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-06-01/examples/ApplicationUpdate.json
 */
async function applicationUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const applicationName = "app1";
  const parameters = {
    allowUpdates: true,
    defaultVersion: "2",
    displayName: "myAppName",
  };
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const result = await client.applicationOperations.update(
    resourceGroupName,
    accountName,
    applicationName,
    parameters
  );
  console.log(result);
}

applicationUpdate().catch(console.error);
