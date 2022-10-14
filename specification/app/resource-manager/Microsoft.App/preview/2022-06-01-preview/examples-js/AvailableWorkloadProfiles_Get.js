const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get all available workload profiles for a location.
 *
 * @summary Get all available workload profiles for a location.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/AvailableWorkloadProfiles_Get.json
 */
async function billingMetersGet() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const location = "East US";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.availableWorkloadProfiles.list(location)) {
    resArray.push(item);
  }
  console.log(resArray);
}

billingMetersGet().catch(console.error);
