import com.azure.core.util.Context;
import com.azure.resourcemanager.monitor.models.AlertRuleResourcePatch;
import com.azure.resourcemanager.monitor.models.ConditionOperator;
import com.azure.resourcemanager.monitor.models.RuleMetricDataSource;
import com.azure.resourcemanager.monitor.models.ThresholdRuleCondition;
import com.azure.resourcemanager.monitor.models.TimeAggregationOperator;
import java.time.Duration;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/** Samples for AlertRules Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2016-03-01/examples/patchAlertRule.json
     */
    /**
     * Sample code: Patch an alert rule.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void patchAnAlertRule(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .diagnosticSettings()
            .manager()
            .serviceClient()
            .getAlertRules()
            .updateWithResponse(
                "Rac46PostSwapRG",
                "chiricutin",
                new AlertRuleResourcePatch()
                    .withTags(
                        mapOf("$type", "Microsoft.WindowsAzure.Management.Common.Storage.CasePreservedDictionary"))
                    .withName("chiricutin")
                    .withDescription("Pura Vida")
                    .withIsEnabled(true)
                    .withCondition(
                        new ThresholdRuleCondition()
                            .withDataSource(
                                new RuleMetricDataSource()
                                    .withResourceUri(
                                        "/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Rac46PostSwapRG/providers/Microsoft.Web/sites/leoalerttest")
                                    .withMetricName("Requests"))
                            .withOperator(ConditionOperator.GREATER_THAN)
                            .withThreshold(3.0)
                            .withWindowSize(Duration.parse("PT5M"))
                            .withTimeAggregation(TimeAggregationOperator.TOTAL))
                    .withActions(Arrays.asList()),
                Context.NONE);
    }

    @SuppressWarnings("unchecked")
    private static <T> Map<String, T> mapOf(Object... inputs) {
        Map<String, T> map = new HashMap<>();
        for (int i = 0; i < inputs.length; i += 2) {
            String key = (String) inputs[i];
            T value = (T) inputs[i + 1];
            map.put(key, value);
        }
        return map;
    }
}
