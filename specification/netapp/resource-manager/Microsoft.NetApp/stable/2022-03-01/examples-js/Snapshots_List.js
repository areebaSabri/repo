const { NetAppManagementClient } = require("@azure/arm-netapp");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List all snapshots associated with the volume
 *
 * @summary List all snapshots associated with the volume
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-03-01/examples/Snapshots_List.json
 */
async function snapshotsList() {
  const subscriptionId = "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const volumeName = "volume1";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.snapshots.list(
    resourceGroupName,
    accountName,
    poolName,
    volumeName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

snapshotsList().catch(console.error);
