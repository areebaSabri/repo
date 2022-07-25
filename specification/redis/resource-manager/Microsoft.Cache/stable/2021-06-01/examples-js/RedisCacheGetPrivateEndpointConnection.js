const { RedisManagementClient } = require("@azure/arm-rediscache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the specified private endpoint connection associated with the redis cache.
 *
 * @summary Gets the specified private endpoint connection associated with the redis cache.
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2021-06-01/examples/RedisCacheGetPrivateEndpointConnection.json
 */
async function redisCacheGetPrivateEndpointConnection() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "rgtest01";
  const cacheName = "cachetest01";
  const privateEndpointConnectionName = "pectest01";
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.get(
    resourceGroupName,
    cacheName,
    privateEndpointConnectionName
  );
  console.log(result);
}

redisCacheGetPrivateEndpointConnection().catch(console.error);
