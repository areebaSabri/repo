const { RedisEnterpriseManagementClient } = require("@azure/arm-redisenterprisecache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates the state of the specified private endpoint connection associated with the RedisEnterprise cluster.
 *
 * @summary Updates the state of the specified private endpoint connection associated with the RedisEnterprise cluster.
 * x-ms-original-file: specification/redisenterprise/resource-manager/Microsoft.Cache/stable/2022-01-01/examples/RedisEnterprisePutPrivateEndpointConnection.json
 */
async function redisEnterprisePutPrivateEndpointConnection() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cache1";
  const privateEndpointConnectionName = "pectest01";
  const properties = {
    privateLinkServiceConnectionState: {
      description: "Auto-Approved",
      status: "Approved",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RedisEnterpriseManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.beginPutAndWait(
    resourceGroupName,
    clusterName,
    privateEndpointConnectionName,
    properties
  );
  console.log(result);
}

redisEnterprisePutPrivateEndpointConnection().catch(console.error);
