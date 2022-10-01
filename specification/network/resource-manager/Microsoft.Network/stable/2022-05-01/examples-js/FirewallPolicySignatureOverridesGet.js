const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Returns all signatures overrides for a specific policy.
 *
 * @summary Returns all signatures overrides for a specific policy.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/FirewallPolicySignatureOverridesGet.json
 */
async function getSignatureOverrides() {
  const subscriptionId = "e747cc13-97d4-4a79-b463-42d7f4e558f2";
  const resourceGroupName = "rg1";
  const firewallPolicyName = "firewallPolicy";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.firewallPolicyIdpsSignaturesOverrides.get(
    resourceGroupName,
    firewallPolicyName
  );
  console.log(result);
}

getSignatureOverrides().catch(console.error);
