import com.azure.core.util.Context;

/** Samples for AlertRules Delete. */
public final class Main {
    /*
     * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/alertRules/DeleteAlertRule.json
     */
    /**
     * Sample code: Delete an alert rule.
     *
     * @param manager Entry point to SecurityInsightsManager.
     */
    public static void deleteAnAlertRule(com.azure.resourcemanager.securityinsights.SecurityInsightsManager manager) {
        manager
            .alertRules()
            .deleteWithResponse("myRg", "myWorkspace", "73e01a99-5cd7-4139-a149-9f2736ff2ab5", Context.NONE);
    }
}
