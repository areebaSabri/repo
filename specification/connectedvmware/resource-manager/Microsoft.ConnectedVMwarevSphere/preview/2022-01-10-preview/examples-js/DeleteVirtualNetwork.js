const { AzureArcVMwareManagementServiceAPI } = require("@azure/arm-connectedvmware");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Implements virtual network DELETE method.
 *
 * @summary Implements virtual network DELETE method.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/DeleteVirtualNetwork.json
 */
async function deleteVirtualNetwork() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const virtualNetworkName = "ProdNetwork";
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential, subscriptionId);
  const result = await client.virtualNetworks.beginDeleteAndWait(
    resourceGroupName,
    virtualNetworkName
  );
  console.log(result);
}

deleteVirtualNetwork().catch(console.error);
