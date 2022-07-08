const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update Custom Dns Suffix configuration of an App Service Environment
 *
 * @summary Update Custom Dns Suffix configuration of an App Service Environment
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/UpdateAseCustomDnsSuffixConfiguration.json
 */
async function updateAseCustomDnsSuffixConfiguration() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "test-rg";
  const name = "test-ase";
  const customDnsSuffixConfiguration = {
    certificateUrl: "https://test-kv.vault.azure.net/secrets/contosocert",
    dnsSuffix: "contoso.com",
    keyVaultReferenceIdentity:
      "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/test-rg/providers/microsoft.managedidentity/userassignedidentities/test-user-mi",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceEnvironments.updateAseCustomDnsSuffixConfiguration(
    resourceGroupName,
    name,
    customDnsSuffixConfiguration
  );
  console.log(result);
}

updateAseCustomDnsSuffixConfiguration().catch(console.error);
