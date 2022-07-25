const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or updated WordPress instance resource.
 *
 * @summary Create or updated WordPress instance resource.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/phpworkloads/WordpressInstances_CreateOrUpdate.json
 */
async function workloads() {
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const resourceGroupName = "test-rg";
  const phpWorkloadName = "wp39";
  const wordpressInstanceResource = {
    databaseName: "wpdb",
    databaseUser: "wpuser",
    version: "5.4.2",
  };
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.wordpressInstances.beginCreateOrUpdateAndWait(
    resourceGroupName,
    phpWorkloadName,
    wordpressInstanceResource
  );
  console.log(result);
}

workloads().catch(console.error);
