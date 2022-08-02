const { MobileNetworkManagementClient } = require("@azure/arm-mobilenetwork");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a data network.
 *
 * @summary Creates or updates a data network.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/DataNetworkCreate.json
 */
async function createDataNetwork() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const mobileNetworkName = "testMobileNetwork";
  const dataNetworkName = "testDataNetwork";
  const parameters = {
    description: "myFavouriteDataNetwork",
    location: "eastus",
  };
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.dataNetworks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    mobileNetworkName,
    dataNetworkName,
    parameters
  );
  console.log(result);
}

createDataNetwork().catch(console.error);
