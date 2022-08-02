const { MobileNetworkManagementClient } = require("@azure/arm-mobilenetwork");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the IDs of all provisioned SIMs in a mobile network
 *
 * @summary Lists the IDs of all provisioned SIMs in a mobile network
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/SimIdListByMobileNetwork.json
 */
async function listTheIDsOfAllProvisionedSimsInAMobileNetwork() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg";
  const mobileNetworkName = "testMobileNetworkName";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.mobileNetworks.beginListSimIdsAndWait(
    resourceGroupName,
    mobileNetworkName
  );
  console.log(result);
}

listTheIDsOfAllProvisionedSimsInAMobileNetwork().catch(console.error);
