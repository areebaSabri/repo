import com.azure.core.util.Context;

/** Samples for SqlResources MigrateSqlDatabaseToManualThroughput. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBSqlDatabaseMigrateToManualThroughput.json
     */
    /**
     * Sample code: CosmosDBSqlDatabaseMigrateToManualThroughput.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBSqlDatabaseMigrateToManualThroughput(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getSqlResources()
            .migrateSqlDatabaseToManualThroughput("rg1", "ddb1", "databaseName", Context.NONE);
    }
}
