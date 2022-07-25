const { MySQLManagementFlexibleServerClient } = require("@azure/arm-mysql-flexible");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List all the backups for a given server.
 *
 * @summary List all the backups for a given server.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/stable/2021-05-01/examples/BackupGet.json
 */
async function getABackupForAServer() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = "TestGroup";
  const serverName = "mysqltestserver";
  const backupName = "daily_20210615T160516";
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementFlexibleServerClient(credential, subscriptionId);
  const result = await client.backups.get(resourceGroupName, serverName, backupName);
  console.log(result);
}

getABackupForAServer().catch(console.error);
