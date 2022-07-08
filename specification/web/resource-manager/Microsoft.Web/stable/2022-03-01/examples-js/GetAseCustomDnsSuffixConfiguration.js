const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get Custom Dns Suffix configuration of an App Service Environment
 *
 * @summary Get Custom Dns Suffix configuration of an App Service Environment
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/GetAseCustomDnsSuffixConfiguration.json
 */
async function getAseCustomDnsSuffixConfiguration() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "test-rg";
  const name = "test-ase";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceEnvironments.getAseCustomDnsSuffixConfiguration(
    resourceGroupName,
    name
  );
  console.log(result);
}

getAseCustomDnsSuffixConfiguration().catch(console.error);
