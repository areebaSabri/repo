const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Checks if resource name is available.
 *
 * @summary Checks if resource name is available.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/Certificates_CheckNameAvailability.json
 */
async function certificatesCheckNameAvailability() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "examplerg";
  const environmentName = "testcontainerenv";
  const checkNameAvailabilityRequest = {
    name: "testcertificatename",
    type: "Microsoft.App/managedEnvironments/certificates",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.namespaces.checkNameAvailability(
    resourceGroupName,
    environmentName,
    checkNameAvailabilityRequest
  );
  console.log(result);
}

certificatesCheckNameAvailability().catch(console.error);
