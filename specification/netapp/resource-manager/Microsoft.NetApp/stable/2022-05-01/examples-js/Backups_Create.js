const { NetAppManagementClient } = require("@azure/arm-netapp");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create a backup for the volume
 *
 * @summary Create a backup for the volume
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-05-01/examples/Backups_Create.json
 */
async function backupsCreate() {
  const subscriptionId = "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const volumeName = "volume1";
  const backupName = "backup1";
  const body = { label: "myLabel", location: "eastus" };
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.backups.beginCreateAndWait(
    resourceGroupName,
    accountName,
    poolName,
    volumeName,
    backupName,
    body
  );
  console.log(result);
}

backupsCreate().catch(console.error);
