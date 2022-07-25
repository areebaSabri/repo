const { DynatraceObservability } = require("@azure/arm-dynatrace");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete a TagRule
 *
 * @summary Delete a TagRule
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/preview/2021-09-01-preview/examples/TagRules_Delete_MaximumSet_Gen.json
 */
async function tagRulesDeleteMaximumSetGen() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "myMonitor";
  const ruleSetName = "default";
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.tagRules.beginDeleteAndWait(
    resourceGroupName,
    monitorName,
    ruleSetName
  );
  console.log(result);
}

tagRulesDeleteMaximumSetGen().catch(console.error);
