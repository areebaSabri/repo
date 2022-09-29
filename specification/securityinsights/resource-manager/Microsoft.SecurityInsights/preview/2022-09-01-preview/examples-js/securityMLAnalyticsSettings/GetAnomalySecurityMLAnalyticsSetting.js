const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the Security ML Analytics Settings.
 *
 * @summary Gets the Security ML Analytics Settings.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/securityMLAnalyticsSettings/GetAnomalySecurityMLAnalyticsSetting.json
 */
async function getAAnomalySecurityMlAnalyticsSettings() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const settingsResourceName = "myFirstAnomalySettings";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.securityMLAnalyticsSettings.get(
    resourceGroupName,
    workspaceName,
    settingsResourceName
  );
  console.log(result);
}

getAAnomalySecurityMlAnalyticsSettings().catch(console.error);
