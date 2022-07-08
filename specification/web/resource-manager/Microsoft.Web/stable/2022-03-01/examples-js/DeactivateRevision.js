const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deactivates a revision for a Container App
 *
 * @summary Deactivates a revision for a Container App
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/DeactivateRevision.json
 */
async function deactivateContainerAppRevision() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const containerAppName = "testcontainerApp0";
  const name = "testcontainerApp0-pjxhsye";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.containerAppsRevisions.deactivateRevision(
    resourceGroupName,
    containerAppName,
    name
  );
  console.log(result);
}

deactivateContainerAppRevision().catch(console.error);
