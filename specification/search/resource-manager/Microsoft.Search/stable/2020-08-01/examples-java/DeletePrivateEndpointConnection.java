import com.azure.core.util.Context;

/** Samples for PrivateEndpointConnections Delete. */
public final class Main {
    /*
     * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/stable/2020-08-01/examples/DeletePrivateEndpointConnection.json
     */
    /**
     * Sample code: PrivateEndpointConnectionDelete.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void privateEndpointConnectionDelete(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .searchServices()
            .manager()
            .serviceClient()
            .getPrivateEndpointConnections()
            .deleteWithResponse(
                "rg1", "mysearchservice", "testEndpoint.50bf4fbe-d7c1-4b48-a642-4f5892642546", null, Context.NONE);
    }
}
