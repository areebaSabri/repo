import com.azure.core.util.Context;

/** Samples for PrivateLinkScopedResources Delete. */
public final class Main {
    /*
     * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-07-01-preview/examples/PrivateLinkScopedResourceDelete.json
     */
    /**
     * Sample code: Deletes a scoped resource with a given name.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void deletesAScopedResourceWithAGivenName(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .diagnosticSettings()
            .manager()
            .serviceClient()
            .getPrivateLinkScopedResources()
            .delete("MyResourceGroup", "MyPrivateLinkScope", "scoped-resource-name", Context.NONE);
    }
}
