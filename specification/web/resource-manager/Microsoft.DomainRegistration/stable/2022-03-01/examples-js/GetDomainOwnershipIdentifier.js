const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Get ownership identifier for domain
 *
 * @summary Description for Get ownership identifier for domain
 * x-ms-original-file: specification/web/resource-manager/Microsoft.DomainRegistration/stable/2022-03-01/examples/GetDomainOwnershipIdentifier.json
 */
async function getDomainOwnershipIdentifier() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testrg123";
  const domainName = "example.com";
  const name = "SampleOwnershipId";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.domains.getOwnershipIdentifier(resourceGroupName, domainName, name);
  console.log(result);
}

getDomainOwnershipIdentifier().catch(console.error);
