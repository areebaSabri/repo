import com.azure.core.util.Context;

/** Samples for SqlResources ListSqlContainers. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-05-15/examples/CosmosDBSqlContainerList.json
     */
    /**
     * Sample code: CosmosDBSqlContainerList.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBSqlContainerList(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getSqlResources()
            .listSqlContainers("rgName", "ddb1", "databaseName", Context.NONE);
    }
}
