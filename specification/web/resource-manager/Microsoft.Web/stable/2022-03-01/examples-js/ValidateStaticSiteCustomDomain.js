const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Validates a particular custom domain can be added to a static site.
 *
 * @summary Description for Validates a particular custom domain can be added to a static site.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/ValidateStaticSiteCustomDomain.json
 */
async function validateACustomDomainForAStaticSite() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const domainName = "custom.domain.net";
  const staticSiteCustomDomainRequestPropertiesEnvelope = {};
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.beginValidateCustomDomainCanBeAddedToStaticSiteAndWait(
    resourceGroupName,
    name,
    domainName,
    staticSiteCustomDomainRequestPropertiesEnvelope
  );
  console.log(result);
}

validateACustomDomainForAStaticSite().catch(console.error);
