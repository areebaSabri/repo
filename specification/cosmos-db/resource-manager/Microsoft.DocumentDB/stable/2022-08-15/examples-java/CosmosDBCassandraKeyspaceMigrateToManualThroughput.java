import com.azure.core.util.Context;

/** Samples for CassandraResources MigrateCassandraKeyspaceToManualThroughput. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBCassandraKeyspaceMigrateToManualThroughput.json
     */
    /**
     * Sample code: CosmosDBCassandraKeyspaceMigrateToManualThroughput.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBCassandraKeyspaceMigrateToManualThroughput(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getCassandraResources()
            .migrateCassandraKeyspaceToManualThroughput("rg1", "ddb1", "keyspaceName", Context.NONE);
    }
}
