import com.azure.core.util.Context;
import com.azure.resourcemanager.monitor.fluent.models.ScopedResourceInner;

/** Samples for PrivateLinkScopedResources CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-07-01-preview/examples/PrivateLinkScopedResourceUpdate.json
     */
    /**
     * Sample code: Update a scoped resource in a private link scope.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void updateAScopedResourceInAPrivateLinkScope(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .diagnosticSettings()
            .manager()
            .serviceClient()
            .getPrivateLinkScopedResources()
            .createOrUpdate(
                "MyResourceGroup",
                "MyPrivateLinkScope",
                "scoped-resource-name",
                new ScopedResourceInner()
                    .withLinkedResourceId(
                        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/MyResourceGroup/providers/Microsoft.Insights/components/my-component"),
                Context.NONE);
    }
}
