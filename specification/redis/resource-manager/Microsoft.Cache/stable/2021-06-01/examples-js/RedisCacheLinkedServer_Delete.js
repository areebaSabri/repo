const { RedisManagementClient } = require("@azure/arm-rediscache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes the linked server from a redis cache (requires Premium SKU).
 *
 * @summary Deletes the linked server from a redis cache (requires Premium SKU).
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2021-06-01/examples/RedisCacheLinkedServer_Delete.json
 */
async function linkedServerDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const name = "cache1";
  const linkedServerName = "cache2";
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const result = await client.linkedServer.delete(resourceGroupName, name, linkedServerName);
  console.log(result);
}

linkedServerDelete().catch(console.error);
