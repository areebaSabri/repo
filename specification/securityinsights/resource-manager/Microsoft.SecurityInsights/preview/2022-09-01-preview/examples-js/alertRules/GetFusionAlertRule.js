const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the alert rule.
 *
 * @summary Gets the alert rule.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/alertRules/GetFusionAlertRule.json
 */
async function getAFusionAlertRule() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const ruleId = "myFirstFusionRule";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.alertRules.get(resourceGroupName, workspaceName, ruleId);
  console.log(result);
}

getAFusionAlertRule().catch(console.error);
