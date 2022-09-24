import com.azure.core.util.Context;
import com.azure.resourcemanager.monitor.fluent.models.DataCollectionRuleResourceInner;

/** Samples for DataCollectionRules Create. */
public final class Main {
    /*
     * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-09-01-preview/examples/DataCollectionRulesCreate.json
     */
    /**
     * Sample code: Create or update data collection rule.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createOrUpdateDataCollectionRule(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .diagnosticSettings()
            .manager()
            .serviceClient()
            .getDataCollectionRules()
            .createWithResponse(
                "myResourceGroup",
                "myCollectionRule",
                new DataCollectionRuleResourceInner().withLocation("eastus"),
                Context.NONE);
    }
}
