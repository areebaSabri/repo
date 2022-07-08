const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Deletes a static site build.
 *
 * @summary Description for Deletes a static site build.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/DeleteStaticSiteBuild.json
 */
async function deleteAStaticSiteBuild() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const environmentName = "12";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.beginDeleteStaticSiteBuildAndWait(
    resourceGroupName,
    name,
    environmentName
  );
  console.log(result);
}

deleteAStaticSiteBuild().catch(console.error);
