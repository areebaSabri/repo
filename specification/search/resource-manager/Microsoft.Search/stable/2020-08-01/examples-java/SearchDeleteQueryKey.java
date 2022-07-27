import com.azure.core.util.Context;

/** Samples for QueryKeys Delete. */
public final class Main {
    /*
     * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/stable/2020-08-01/examples/SearchDeleteQueryKey.json
     */
    /**
     * Sample code: SearchDeleteQueryKey.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void searchDeleteQueryKey(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .searchServices()
            .manager()
            .serviceClient()
            .getQueryKeys()
            .deleteWithResponse("rg1", "mysearchservice", "<a query API key>", null, Context.NONE);
    }
}
