const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes the specified network security rule.
 *
 * @summary Deletes the specified network security rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkSecurityGroupRuleDelete.json
 */
async function deleteNetworkSecurityRuleFromNetworkSecurityGroup() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const networkSecurityGroupName = "testnsg";
  const securityRuleName = "rule1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.securityRules.beginDeleteAndWait(
    resourceGroupName,
    networkSecurityGroupName,
    securityRuleName
  );
  console.log(result);
}

deleteNetworkSecurityRuleFromNetworkSecurityGroup().catch(console.error);
