import com.azure.core.util.Context;

/** Samples for InstancePools GetByResourceGroup. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2018-06-01-preview/examples/GetInstancePool.json
     */
    /**
     * Sample code: Get an instance pool.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getAnInstancePool(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getInstancePools()
            .getByResourceGroupWithResponse("group1", "testIP", Context.NONE);
    }
}
