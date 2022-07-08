const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Gets the application settings of a static site build.
 *
 * @summary Description for Gets the application settings of a static site build.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/ListStaticSiteBuildAppSettings.json
 */
async function getAppSettingsOfAStaticSiteBuild() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const environmentName = "12";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.listStaticSiteBuildAppSettings(
    resourceGroupName,
    name,
    environmentName
  );
  console.log(result);
}

getAppSettingsOfAStaticSiteBuild().catch(console.error);
