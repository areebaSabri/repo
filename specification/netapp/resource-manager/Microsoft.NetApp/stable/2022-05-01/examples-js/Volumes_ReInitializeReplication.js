const { NetAppManagementClient } = require("@azure/arm-netapp");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Re-Initializes the replication connection on the destination volume
 *
 * @summary Re-Initializes the replication connection on the destination volume
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-05-01/examples/Volumes_ReInitializeReplication.json
 */
async function volumesReInitializeReplication() {
  const subscriptionId = "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const volumeName = "volume1";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumes.beginReInitializeReplicationAndWait(
    resourceGroupName,
    accountName,
    poolName,
    volumeName
  );
  console.log(result);
}

volumesReInitializeReplication().catch(console.error);
