const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Get networking configuration of an App Service Environment
 *
 * @summary Description for Get networking configuration of an App Service Environment
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/AppServiceEnvironments_GetAseV3NetworkingConfiguration.json
 */
async function getNetworkingConfigurationOfAnAppServiceEnvironment() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "test-rg";
  const name = "test-ase";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceEnvironments.getAseV3NetworkingConfiguration(
    resourceGroupName,
    name
  );
  console.log(result);
}

getNetworkingConfigurationOfAnAppServiceEnvironment().catch(console.error);
