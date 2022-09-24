import com.azure.core.util.Context;

/** Samples for MongoDBResources GetMongoUserDefinition. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBMongoDBUserDefinitionGet.json
     */
    /**
     * Sample code: CosmosDBMongoDBUserDefinitionGet.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBMongoDBUserDefinitionGet(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getMongoDBResources()
            .getMongoUserDefinitionWithResponse(
                "myMongoUserDefinitionId", "myResourceGroupName", "myAccountName", Context.NONE);
    }
}
