const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or Update a Certificate.
 *
 * @summary Create or Update a Certificate.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ConnectedEnvironmentsCertificate_CreateOrUpdate.json
 */
async function createOrUpdateCertificate() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "examplerg";
  const connectedEnvironmentName = "testcontainerenv";
  const certificateName = "certificate-firendly-name";
  const certificateEnvelope = {
    location: "East US",
    properties: {
      password: "private key password",
      value: Buffer.from("PFX-or-PEM-blob"),
    },
  };
  const options = {
    certificateEnvelope,
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.connectedEnvironmentsCertificates.createOrUpdate(
    resourceGroupName,
    connectedEnvironmentName,
    certificateName,
    options
  );
  console.log(result);
}

createOrUpdateCertificate().catch(console.error);
