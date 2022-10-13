const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates an connectedEnvironment.
 *
 * @summary Creates or updates an connectedEnvironment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ConnectedEnvironments_CreateOrUpdate.json
 */
async function createKubeEnvironments() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "examplerg";
  const connectedEnvironmentName = "testenv";
  const environmentEnvelope = {
    customDomainConfiguration: {
      certificatePassword: Buffer.from("private key password"),
      certificateValue: Buffer.from("PFX-or-PEM-blob"),
      dnsSuffix: "www.my-name.com",
    },
    daprAIConnectionString:
      "InstrumentationKey=00000000-0000-0000-0000-000000000000;IngestionEndpoint=https://northcentralus-0.in.applicationinsights.azure.com/",
    location: "East US",
    staticIp: "1.2.3.4",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.connectedEnvironments.beginCreateOrUpdateAndWait(
    resourceGroupName,
    connectedEnvironmentName,
    environmentEnvelope
  );
  console.log(result);
}

createKubeEnvironments().catch(console.error);
