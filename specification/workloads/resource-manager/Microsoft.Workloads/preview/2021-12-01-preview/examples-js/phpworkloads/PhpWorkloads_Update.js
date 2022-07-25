const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update PHP workload resource.
 *
 * @summary Update PHP workload resource.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/phpworkloads/PhpWorkloads_Update.json
 */
async function workloads() {
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const resourceGroupName = "test-rg";
  const phpWorkloadName = "wp39";
  const resourcePatchRequestBody = {
    identity: { type: "None" },
    tags: { tagName: "tag_value" },
  };
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.phpWorkloads.update(
    resourceGroupName,
    phpWorkloadName,
    resourcePatchRequestBody
  );
  console.log(result);
}

workloads().catch(console.error);
