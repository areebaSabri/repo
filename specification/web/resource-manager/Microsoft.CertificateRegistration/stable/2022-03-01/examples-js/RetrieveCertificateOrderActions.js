const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Retrieve the list of certificate actions.
 *
 * @summary Description for Retrieve the list of certificate actions.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.CertificateRegistration/stable/2022-03-01/examples/RetrieveCertificateOrderActions.json
 */
async function retrieveCertificateOrderActions() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testrg123";
  const name = "SampleCertOrder";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceCertificateOrders.retrieveCertificateActions(
    resourceGroupName,
    name
  );
  console.log(result);
}

retrieveCertificateOrderActions().catch(console.error);
