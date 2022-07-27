import com.azure.core.util.Context;

/** Samples for VirtualClusters Delete. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2015-05-01-preview/examples/VirtualClusterDelete.json
     */
    /**
     * Sample code: Delete virtual cluster.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void deleteVirtualCluster(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getVirtualClusters()
            .delete("testrg", "vc-subnet1-f769ed71-b3ad-491a-a9d5-26eeceaa6be2", Context.NONE);
    }
}
