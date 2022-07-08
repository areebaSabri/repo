const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Validates that a backend can be linked to a static site build
 *
 * @summary Validates that a backend can be linked to a static site build
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/ValidateLinkedBackendForStaticSiteBuild.json
 */
async function validateIfBackendCanBeLinkedToStaticSiteBuild() {
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
  const result = await client.staticSites.beginValidateBackendForBuildAndWait(
    resourceGroupName,
    name,
    environmentName,
    linkedBackendName,
    staticSiteLinkedBackendEnvelope
  );
  console.log(result);
}

validateIfBackendCanBeLinkedToStaticSiteBuild().catch(console.error);
