const { NetAppManagementClient } = require("@azure/arm-netapp");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List all Backups for a Netapp Account
 *
 * @summary List all Backups for a Netapp Account
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-03-01/examples/Backups_Account_List.json
 */
async function accountBackupsList() {
  const subscriptionId = "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = "myRG";
  const accountName = "account1";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.accountBackups.list(resourceGroupName, accountName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

accountBackupsList().catch(console.error);
