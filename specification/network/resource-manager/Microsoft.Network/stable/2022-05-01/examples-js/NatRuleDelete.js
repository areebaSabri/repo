const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes a nat rule.
 *
 * @summary Deletes a nat rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NatRuleDelete.json
 */
async function natRuleDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const gatewayName = "gateway1";
  const natRuleName = "natRule1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.natRules.beginDeleteAndWait(
    resourceGroupName,
    gatewayName,
    natRuleName
  );
  console.log(result);
}

natRuleDelete().catch(console.error);
