const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the Certificates in a given managed environment.
 *
 * @summary Get the Certificates in a given managed environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/Certificates_ListByManagedEnvironment.json
 */
async function listCertificatesByManagedEnvironment() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "examplerg";
  const environmentName = "testcontainerenv";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.certificates.list(resourceGroupName, environmentName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listCertificatesByManagedEnvironment().catch(console.error);
