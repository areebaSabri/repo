const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the action of alert rule.
 *
 * @summary Gets the action of alert rule.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/actions/GetActionOfAlertRuleById.json
 */
async function getAnActionOfAlertRule() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const ruleId = "73e01a99-5cd7-4139-a149-9f2736ff2ab5";
  const actionId = "912bec42-cb66-4c03-ac63-1761b6898c3e";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.actions.get(resourceGroupName, workspaceName, ruleId, actionId);
  console.log(result);
}

getAnActionOfAlertRule().catch(console.error);
