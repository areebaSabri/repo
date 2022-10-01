const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Retrieves the details of a ConfigurationPolicyGroup.
 *
 * @summary Retrieves the details of a ConfigurationPolicyGroup.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/ConfigurationPolicyGroupGet.json
 */
async function configurationPolicyGroupGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const vpnServerConfigurationName = "vpnServerConfiguration1";
  const configurationPolicyGroupName = "policyGroup1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.configurationPolicyGroups.get(
    resourceGroupName,
    vpnServerConfigurationName,
    configurationPolicyGroupName
  );
  console.log(result);
}

configurationPolicyGroupGet().catch(console.error);
