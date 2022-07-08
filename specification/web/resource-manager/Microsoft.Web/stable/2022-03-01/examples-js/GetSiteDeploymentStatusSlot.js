const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the deployment status for an app (or deployment slot, if specified).
 *
 * @summary Gets the deployment status for an app (or deployment slot, if specified).
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/GetSiteDeploymentStatusSlot.json
 */
async function getDeploymentStatusSlot() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testSite";
  const slot = "stage";
  const deploymentStatusId = "eacfd68b-3bbd-4ad9-99c5-98614d89c8e5";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.beginGetSlotSiteDeploymentStatusSlotAndWait(
    resourceGroupName,
    name,
    slot,
    deploymentStatusId
  );
  console.log(result);
}

getDeploymentStatusSlot().catch(console.error);
