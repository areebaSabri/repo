const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Deletes a private endpoint connection
 *
 * @summary Description for Deletes a private endpoint connection
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/DeleteSitePrivateEndpointConnectionSlot.json
 */
async function deleteAPrivateEndpointConnectionForASite() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testSite";
  const privateEndpointConnectionName = "connection";
  const slot = "stage";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.beginDeletePrivateEndpointConnectionSlotAndWait(
    resourceGroupName,
    name,
    privateEndpointConnectionName,
    slot
  );
  console.log(result);
}

deleteAPrivateEndpointConnectionForASite().catch(console.error);
