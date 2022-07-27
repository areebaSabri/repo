import com.azure.core.util.Context;

/** Samples for RecommendedElasticPools ListMetrics. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/stable/2014-04-01/examples/RecommendedElasticPoolListMetrics.json
     */
    /**
     * Sample code: Get recommended elastic pool metrics.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getRecommendedElasticPoolMetrics(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getRecommendedElasticPools()
            .listMetrics("sqlcrudtest-6852", "sqlcrudtest-2080", "sqlcrudtest-2080_pool1", Context.NONE);
    }
}
