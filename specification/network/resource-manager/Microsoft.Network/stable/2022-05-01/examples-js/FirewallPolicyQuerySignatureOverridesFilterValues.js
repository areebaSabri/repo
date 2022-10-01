const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Retrieves the current filter values for the signatures overrides
 *
 * @summary Retrieves the current filter values for the signatures overrides
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/FirewallPolicyQuerySignatureOverridesFilterValues.json
 */
async function querySignatureOverrides() {
  const subscriptionId = "e747cc13-97d4-4a79-b463-42d7f4e558f2";
  const resourceGroupName = "rg1";
  const firewallPolicyName = "firewallPolicy";
  const parameters = {
    filterName: "severity",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.firewallPolicyIdpsSignaturesFilterValues.list(
    resourceGroupName,
    firewallPolicyName,
    parameters
  );
  console.log(result);
}

querySignatureOverrides().catch(console.error);
