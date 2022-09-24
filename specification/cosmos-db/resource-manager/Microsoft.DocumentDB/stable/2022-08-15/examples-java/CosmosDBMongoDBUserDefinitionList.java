import com.azure.core.util.Context;

/** Samples for MongoDBResources ListMongoUserDefinitions. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBMongoDBUserDefinitionList.json
     */
    /**
     * Sample code: CosmosDBMongoDBUserDefinitionList.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBMongoDBUserDefinitionList(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getMongoDBResources()
            .listMongoUserDefinitions("myResourceGroupName", "myAccountName", Context.NONE);
    }
}
