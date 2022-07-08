const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List deployment statuses for an app (or deployment slot, if specified).
 *
 * @summary List deployment statuses for an app (or deployment slot, if specified).
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/ListSiteDeploymentStatusSlot.json
 */
async function listDeploymentStatusSlot() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testSite";
  const slot = "stage";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.webApps.listSlotSiteDeploymentStatusesSlot(
    resourceGroupName,
    name,
    slot
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listDeploymentStatusSlot().catch(console.error);
