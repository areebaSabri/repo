const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Get the certificate associated with a certificate order.
 *
 * @summary Description for Get the certificate associated with a certificate order.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.CertificateRegistration/stable/2022-03-01/examples/GetAppServiceCertificate.json
 */
async function getAppServiceCertificate() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testrg123";
  const certificateOrderName = "SampleCertificateOrderName";
  const name = "SampleCertName1";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceCertificateOrders.getCertificate(
    resourceGroupName,
    certificateOrderName,
    name
  );
  console.log(result);
}

getAppServiceCertificate().catch(console.error);
