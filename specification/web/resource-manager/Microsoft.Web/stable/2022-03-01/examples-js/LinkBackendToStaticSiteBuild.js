const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Link backend to a static site build
 *
 * @summary Link backend to a static site build
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/LinkBackendToStaticSiteBuild.json
 */
async function linkABackendToAStaticSiteBuild() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const environmentName = "default";
  const linkedBackendName = "testBackend";
  const staticSiteLinkedBackendEnvelope = {
    backendResourceId:
      "/subscription/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/backendRg/providers/Microsoft.Web/sites/testBackend",
    region: "West US 2",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.beginLinkBackendToBuildAndWait(
    resourceGroupName,
    name,
    environmentName,
    linkedBackendName,
    staticSiteLinkedBackendEnvelope
  );
  console.log(result);
}

linkABackendToAStaticSiteBuild().catch(console.error);
