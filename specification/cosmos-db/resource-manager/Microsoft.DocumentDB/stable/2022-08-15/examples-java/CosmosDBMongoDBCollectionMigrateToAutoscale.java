import com.azure.core.util.Context;

/** Samples for MongoDBResources MigrateMongoDBCollectionToAutoscale. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBMongoDBCollectionMigrateToAutoscale.json
     */
    /**
     * Sample code: CosmosDBMongoDBCollectionMigrateToAutoscale.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBMongoDBCollectionMigrateToAutoscale(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getMongoDBResources()
            .migrateMongoDBCollectionToAutoscale("rg1", "ddb1", "databaseName", "collectionName", Context.NONE);
    }
}
