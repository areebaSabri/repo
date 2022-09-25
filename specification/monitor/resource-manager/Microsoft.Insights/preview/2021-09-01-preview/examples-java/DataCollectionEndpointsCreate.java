import com.azure.core.util.Context;
import com.azure.resourcemanager.monitor.fluent.models.DataCollectionEndpointResourceInner;

/** Samples for DataCollectionEndpoints Create. */
public final class Main {
    /*
     * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-09-01-preview/examples/DataCollectionEndpointsCreate.json
     */
    /**
     * Sample code: Create or update data collection endpoint.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createOrUpdateDataCollectionEndpoint(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .diagnosticSettings()
            .manager()
            .serviceClient()
            .getDataCollectionEndpoints()
            .createWithResponse(
                "myResourceGroup",
                "myCollectionEndpoint",
                new DataCollectionEndpointResourceInner().withLocation("eastus"),
                Context.NONE);
    }
}
