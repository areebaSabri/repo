const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Gets the category of ResourceHealthMetadata to use for the given site
 *
 * @summary Description for Gets the category of ResourceHealthMetadata to use for the given site
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/GetResourceHealthMetadataBySite.json
 */
async function getResourceHealthMetadata() {
  const subscriptionId = "4adb32ad-8327-4cbb-b775-b84b4465bb38";
  const resourceGroupName = "Default-Web-NorthCentralUS";
  const name = "newsiteinnewASE-NCUS";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.resourceHealthMetadataOperations.getBySite(resourceGroupName, name);
  console.log(result);
}

getResourceHealthMetadata().catch(console.error);
