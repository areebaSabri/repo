const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Patches a certificate. Currently only patching of tags is supported
 *
 * @summary Patches a certificate. Currently only patching of tags is supported
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/Certificates_Patch.json
 */
async function patchCertificate() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "examplerg";
  const environmentName = "testcontainerenv";
  const certificateName = "certificate-firendly-name";
  const certificateEnvelope = {
    tags: { tag1: "value1", tag2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.certificates.update(
    resourceGroupName,
    environmentName,
    certificateName,
    certificateEnvelope
  );
  console.log(result);
}

patchCertificate().catch(console.error);
