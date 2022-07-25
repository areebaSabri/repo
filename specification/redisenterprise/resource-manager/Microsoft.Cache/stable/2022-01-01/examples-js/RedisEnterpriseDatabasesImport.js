const { RedisEnterpriseManagementClient } = require("@azure/arm-redisenterprisecache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Imports database files to target database.
 *
 * @summary Imports database files to target database.
 * x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2022-01-01/examples/RedisEnterpriseDatabasesImport.json
 */
async function redisEnterpriseDatabasesImport() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cache1";
  const databaseName = "default";
  const parameters = {
    sasUris: [
      "https://contosostorage.blob.core.window.net/urltoBlobFile1?sasKeyParameters",
      "https://contosostorage.blob.core.window.net/urltoBlobFile2?sasKeyParameters",
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new RedisEnterpriseManagementClient(credential, subscriptionId);
  const result = await client.databases.beginImportAndWait(
    resourceGroupName,
    clusterName,
    databaseName,
    parameters
  );
  console.log(result);
}

redisEnterpriseDatabasesImport().catch(console.error);
