const { ContainerAppsAPIClient } = require("@azure/arm-app");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or Update a Certificate.
 *
 * @summary Create or Update a Certificate.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-01-01-preview/examples/Certificate_CreateOrUpdate.json
 */
async function createOrUpdateCertificate() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "examplerg";
  const managedEnvironmentName = "testcontainerenv";
  const name = "certificate-firendly-name";
  const certificateEnvelope = {
    location: "East US",
    properties: {
      password: "private key password",
      value: new Uint8Array(),
    },
  };
  const options = {
    certificateEnvelope,
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.certificates.createOrUpdate(
    resourceGroupName,
    managedEnvironmentName,
    name,
    options
  );
  console.log(result);
}

createOrUpdateCertificate().catch(console.error);
