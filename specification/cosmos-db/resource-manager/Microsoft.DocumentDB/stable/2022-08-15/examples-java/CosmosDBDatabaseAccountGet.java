import com.azure.core.util.Context;

/** Samples for DatabaseAccounts GetByResourceGroup. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBDatabaseAccountGet.json
     */
    /**
     * Sample code: CosmosDBDatabaseAccountGet.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBDatabaseAccountGet(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getDatabaseAccounts()
            .getByResourceGroupWithResponse("rg1", "ddb1", Context.NONE);
    }
}
