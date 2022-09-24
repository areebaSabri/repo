import com.azure.core.util.Context;

/** Samples for RestorableMongodbResources List. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBRestorableMongodbResourceList.json
     */
    /**
     * Sample code: CosmosDBRestorableMongodbResourceList.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBRestorableMongodbResourceList(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getRestorableMongodbResources()
            .list("WestUS", "d9b26648-2f53-4541-b3d8-3044f4f9810d", "WestUS", "06/01/2022 4:56", Context.NONE);
    }
}
