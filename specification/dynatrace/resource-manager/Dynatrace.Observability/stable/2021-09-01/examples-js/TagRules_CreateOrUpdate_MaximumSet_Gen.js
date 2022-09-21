const { DynatraceObservability } = require("@azure/arm-dynatrace");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create a TagRule
 *
 * @summary Create a TagRule
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2021-09-01/examples/TagRules_CreateOrUpdate_MaximumSet_Gen.json
 */
async function tagRulesCreateOrUpdateMaximumSetGen() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "myMonitor";
  const ruleSetName = "default";
  const resource = {
    logRules: {
      filteringTags: [
        { name: "Environment", action: "Include", value: "Prod" },
        { name: "Environment", action: "Exclude", value: "Dev" },
      ],
      sendAadLogs: "Enabled",
      sendActivityLogs: "Enabled",
      sendSubscriptionLogs: "Enabled",
    },
    metricRules: {
      filteringTags: [{ name: "Environment", action: "Include", value: "Prod" }],
    },
    provisioningState: "Accepted",
  };
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.tagRules.beginCreateOrUpdateAndWait(
    resourceGroupName,
    monitorName,
    ruleSetName,
    resource
  );
  console.log(result);
}

tagRulesCreateOrUpdateMaximumSetGen().catch(console.error);
