import com.azure.core.util.Context;

/** Samples for SqlResources DeleteSqlContainer. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBSqlContainerDelete.json
     */
    /**
     * Sample code: CosmosDBSqlContainerDelete.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBSqlContainerDelete(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getSqlResources()
            .deleteSqlContainer("rg1", "ddb1", "databaseName", "containerName", Context.NONE);
    }
}
