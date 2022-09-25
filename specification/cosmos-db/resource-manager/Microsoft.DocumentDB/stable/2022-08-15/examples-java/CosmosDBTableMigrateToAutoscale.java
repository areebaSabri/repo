import com.azure.core.util.Context;

/** Samples for TableResources MigrateTableToAutoscale. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBTableMigrateToAutoscale.json
     */
    /**
     * Sample code: CosmosDBTableMigrateToAutoscale.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBTableMigrateToAutoscale(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getTableResources()
            .migrateTableToAutoscale("rg1", "ddb1", "tableName", Context.NONE);
    }
}
