const { RedisEnterpriseManagementClient } = require("@azure/arm-redisenterprisecache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Exports a database file from target database.
 *
 * @summary Exports a database file from target database.
 * x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2022-01-01/examples/RedisEnterpriseDatabasesExport.json
 */
async function redisEnterpriseDatabasesExport() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cache1";
  const databaseName = "default";
  const parameters = {
    sasUri: "https://contosostorage.blob.core.window.net/urlToBlobContainer?sasKeyParameters",
  };
  const credential = new DefaultAzureCredential();
  const client = new RedisEnterpriseManagementClient(credential, subscriptionId);
  const result = await client.databases.beginExportAndWait(
    resourceGroupName,
    clusterName,
    databaseName,
    parameters
  );
  console.log(result);
}

redisEnterpriseDatabasesExport().catch(console.error);
