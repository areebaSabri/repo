import com.azure.core.util.Context;

/** Samples for CassandraDataCenters List. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBManagedCassandraDataCenterList.json
     */
    /**
     * Sample code: CosmosDBManagedCassandraDataCenterList.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBManagedCassandraDataCenterList(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getCassandraDataCenters()
            .list("cassandra-prod-rg", "cassandra-prod", Context.NONE);
    }
}
