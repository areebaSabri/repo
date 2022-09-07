const { RedisManagementClient } = require("@azure/arm-rediscache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes a single firewall rule in a specified redis cache.
 *
 * @summary Deletes a single firewall rule in a specified redis cache.
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2022-05-01/examples/RedisCacheFirewallRuleDelete.json
 */
async function redisCacheFirewallRuleDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const cacheName = "cache1";
  const ruleName = "rule1";
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const result = await client.firewallRules.delete(resourceGroupName, cacheName, ruleName);
  console.log(result);
}

redisCacheFirewallRuleDelete().catch(console.error);
