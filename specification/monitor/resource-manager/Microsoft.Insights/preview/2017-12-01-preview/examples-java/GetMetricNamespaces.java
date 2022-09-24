import com.azure.core.util.Context;

/** Samples for MetricNamespaces List. */
public final class Main {
    /*
     * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2017-12-01-preview/examples/GetMetricNamespaces.json
     */
    /**
     * Sample code: Get Metric Namespaces without filter.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getMetricNamespacesWithoutFilter(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .diagnosticSettings()
            .manager()
            .serviceClient()
            .getMetricNamespaces()
            .list(
                "subscriptions/182c901a-129a-4f5d-86e4-cc6b294590a2/resourceGroups/hyr-log/providers/microsoft.insights/components/f1-bill",
                "2020-08-31T15:53:00Z",
                Context.NONE);
    }
}
