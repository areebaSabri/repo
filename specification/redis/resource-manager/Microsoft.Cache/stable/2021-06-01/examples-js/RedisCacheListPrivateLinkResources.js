const { RedisManagementClient } = require("@azure/arm-rediscache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the private link resources that need to be created for a redis cache.
 *
 * @summary Gets the private link resources that need to be created for a redis cache.
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2021-06-01/examples/RedisCacheListPrivateLinkResources.json
 */
async function storageAccountListPrivateLinkResources() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgtest01";
  const cacheName = "cacheTest01";
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateLinkResources.listByRedisCache(
    resourceGroupName,
    cacheName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

storageAccountListPrivateLinkResources().catch(console.error);
