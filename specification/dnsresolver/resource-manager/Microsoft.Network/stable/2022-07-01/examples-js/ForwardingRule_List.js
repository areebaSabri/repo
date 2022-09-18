const { DnsResolverManagementClient } = require("@azure/arm-dnsresolver");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists forwarding rules in a DNS forwarding ruleset.
 *
 * @summary Lists forwarding rules in a DNS forwarding ruleset.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ForwardingRule_List.json
 */
async function listForwardingRulesInADnsForwardingRuleset() {
  const subscriptionId = "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName = "sampleResourceGroup";
  const dnsForwardingRulesetName = "sampleDnsForwardingRuleset";
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.forwardingRules.list(resourceGroupName, dnsForwardingRulesetName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listForwardingRulesInADnsForwardingRuleset().catch(console.error);
