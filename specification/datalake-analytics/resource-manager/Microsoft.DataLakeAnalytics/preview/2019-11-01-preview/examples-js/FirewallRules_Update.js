const { DataLakeAnalyticsAccountManagementClient } = require("@azure/arm-datalake-analytics");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates the specified firewall rule.
 *
 * @summary Updates the specified firewall rule.
 * x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/FirewallRules_Update.json
 */
async function updatesTheSpecifiedFirewallRule() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "contosorg";
  const accountName = "contosoadla";
  const firewallRuleName = "test_rule";
  const parameters = {
    endIpAddress: "2.2.2.2",
    startIpAddress: "1.1.1.1",
  };
  const options = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new DataLakeAnalyticsAccountManagementClient(credential, subscriptionId);
  const result = await client.firewallRules.update(
    resourceGroupName,
    accountName,
    firewallRuleName,
    options
  );
  console.log(result);
}

updatesTheSpecifiedFirewallRule().catch(console.error);
