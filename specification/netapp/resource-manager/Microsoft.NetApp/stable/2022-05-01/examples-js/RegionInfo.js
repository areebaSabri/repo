const { NetAppManagementClient } = require("@azure/arm-netapp");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Provides storage to network proximity and logical zone mapping information.
 *
 * @summary Provides storage to network proximity and logical zone mapping information.
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-05-01/examples/RegionInfo.json
 */
async function regionInfoQuery() {
  const subscriptionId = "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const location = "eastus";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.netAppResource.queryRegionInfo(location);
  console.log(result);
}

regionInfoQuery().catch(console.error);
