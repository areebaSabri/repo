const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Deploys zipped content to a static site.
 *
 * @summary Description for Deploys zipped content to a static site.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/StaticSiteZipDeploy.json
 */
async function deployASiteFromAZippedPackage() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const staticSiteZipDeploymentEnvelope = {
    apiZipUrl:
      "https://teststorageaccount.net/happy-sea-15afae3e-master-81828877/api-zipdeploy.zip",
    appZipUrl:
      "https://teststorageaccount.net/happy-sea-15afae3e-master-81828877/app-zipdeploy.zip",
    deploymentTitle: "Update index.html",
    functionLanguage: "testFunctionLanguage",
    provider: "testProvider",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.beginCreateZipDeploymentForStaticSiteAndWait(
    resourceGroupName,
    name,
    staticSiteZipDeploymentEnvelope
  );
  console.log(result);
}

deployASiteFromAZippedPackage().catch(console.error);
