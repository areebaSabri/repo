const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List all SKUs available for a virtual appliance.
 *
 * @summary List all SKUs available for a virtual appliance.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkVirtualApplianceSkuList.json
 */
async function networkVirtualApplianceSkuListResult() {
  const subscriptionId = "subid";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualApplianceSkus.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

networkVirtualApplianceSkuListResult().catch(console.error);
