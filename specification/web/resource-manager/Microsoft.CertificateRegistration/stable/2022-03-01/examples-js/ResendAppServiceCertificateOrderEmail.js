const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Resend certificate email.
 *
 * @summary Description for Resend certificate email.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.CertificateRegistration/stable/2022-03-01/examples/ResendAppServiceCertificateOrderEmail.json
 */
async function resendAppServiceCertificateOrderEmail() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testrg123";
  const certificateOrderName = "SampleCertificateOrderName";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceCertificateOrders.resendEmail(
    resourceGroupName,
    certificateOrderName
  );
  console.log(result);
}

resendAppServiceCertificateOrderEmail().catch(console.error);
