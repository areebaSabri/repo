const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Checks if resource connectedEnvironmentName is available.
 *
 * @summary Checks if resource connectedEnvironmentName is available.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ConnectedEnvironmentsCertificates_CheckNameAvailability.json
 */
async function certificatesCheckNameAvailability() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "examplerg";
  const connectedEnvironmentName = "testcontainerenv";
  const checkNameAvailabilityRequest = {
    name: "testcertificatename",
    type: "Microsoft.App/connectedEnvironments/certificates",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.connectedEnvironments.checkNameAvailability(
    resourceGroupName,
    connectedEnvironmentName,
    checkNameAvailabilityRequest
  );
  console.log(result);
}

certificatesCheckNameAvailability().catch(console.error);
