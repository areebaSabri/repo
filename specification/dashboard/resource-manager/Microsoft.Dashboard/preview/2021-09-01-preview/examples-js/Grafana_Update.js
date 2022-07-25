const { DashboardManagementClient } = require("@azure/arm-dashboard");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update a workspace for Grafana resource.
 *
 * @summary Update a workspace for Grafana resource.
 * x-ms-original-file: specification/dashboard/resource-manager/Microsoft.Dashboard/preview/2021-09-01-preview/examples/Grafana_Update.json
 */
async function grafanaUpdate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const workspaceName = "myWorkspace";
  const requestBodyParameters = {
    tags: { environment: "Dev 2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DashboardManagementClient(credential, subscriptionId);
  const result = await client.grafana.update(
    resourceGroupName,
    workspaceName,
    requestBodyParameters
  );
  console.log(result);
}

grafanaUpdate().catch(console.error);
