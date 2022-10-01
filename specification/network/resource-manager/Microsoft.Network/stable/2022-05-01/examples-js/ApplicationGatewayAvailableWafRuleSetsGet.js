const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists all available web application firewall rule sets.
 *
 * @summary Lists all available web application firewall rule sets.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/ApplicationGatewayAvailableWafRuleSetsGet.json
 */
async function getAvailableWafRuleSets() {
  const subscriptionId = "subid";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.applicationGateways.listAvailableWafRuleSets();
  console.log(result);
}

getAvailableWafRuleSets().catch(console.error);
