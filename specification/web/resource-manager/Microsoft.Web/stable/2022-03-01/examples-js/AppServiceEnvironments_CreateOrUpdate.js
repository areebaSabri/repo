const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Create or update an App Service Environment.
 *
 * @summary Description for Create or update an App Service Environment.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/AppServiceEnvironments_CreateOrUpdate.json
 */
async function createOrUpdateAnAppServiceEnvironment() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "test-rg";
  const name = "test-ase";
  const hostingEnvironmentEnvelope = {
    kind: "Asev3",
    location: "South Central US",
    virtualNetwork: {
      id: "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/test-rg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/delegated",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceEnvironments.beginCreateOrUpdateAndWait(
    resourceGroupName,
    name,
    hostingEnvironmentEnvelope
  );
  console.log(result);
}

createOrUpdateAnAppServiceEnvironment().catch(console.error);
