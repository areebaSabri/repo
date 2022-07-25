const { DashboardManagementClient } = require("@azure/arm-dashboard");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update a workspace for Grafana resource. This API is idempotent, so user can either create a new grafana or update an existing grafana.
 *
 * @summary Create or update a workspace for Grafana resource. This API is idempotent, so user can either create a new grafana or update an existing grafana.
 * x-ms-original-file: specification/dashboard/resource-manager/Microsoft.Dashboard/preview/2021-09-01-preview/examples/Grafana_Create.json
 */
async function grafanaCreate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const workspaceName = "myWorkspace";
  const requestBodyParameters = {
    identity: { type: "SystemAssigned" },
    location: "West US",
    properties: { provisioningState: "Accepted", zoneRedundancy: "Enabled" },
    sku: { name: "Standard" },
    tags: { environment: "Dev" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DashboardManagementClient(credential, subscriptionId);
  const result = await client.grafana.beginCreateAndWait(
    resourceGroupName,
    workspaceName,
    requestBodyParameters
  );
  console.log(result);
}

grafanaCreate().catch(console.error);
