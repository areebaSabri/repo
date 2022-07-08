const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Create or update a certificate purchase order.
 *
 * @summary Description for Create or update a certificate purchase order.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.CertificateRegistration/stable/2022-03-01/examples/UpdateAppServiceCertificateOrder.json
 */
async function updateCertificateOrder() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testrg123";
  const certificateOrderName = "SampleCertificateOrderName";
  const certificateDistinguishedName = {
    autoRenew: true,
    certificates: {
      sampleCertName1: {
        keyVaultId:
          "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testrg123/providers/microsoft.keyvault/vaults/SamplevaultName",
        keyVaultSecretName: "SampleSecretName1",
      },
      sampleCertName2: {
        keyVaultId:
          "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testrg123/providers/microsoft.keyvault/vaults/SamplevaultName",
        keyVaultSecretName: "SampleSecretName2",
      },
    },
    distinguishedName: "CN=SampleCustomDomain.com",
    keySize: 2048,
    productType: "StandardDomainValidatedSsl",
    validityInYears: 2,
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceCertificateOrders.update(
    resourceGroupName,
    certificateOrderName,
    certificateDistinguishedName
  );
  console.log(result);
}

updateCertificateOrder().catch(console.error);
