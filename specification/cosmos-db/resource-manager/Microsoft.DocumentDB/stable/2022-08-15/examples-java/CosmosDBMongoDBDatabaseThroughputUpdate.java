import com.azure.core.util.Context;
import com.azure.resourcemanager.cosmos.models.ThroughputSettingsResource;
import com.azure.resourcemanager.cosmos.models.ThroughputSettingsUpdateParameters;
import java.util.HashMap;
import java.util.Map;

/** Samples for MongoDBResources UpdateMongoDBDatabaseThroughput. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBMongoDBDatabaseThroughputUpdate.json
     */
    /**
     * Sample code: CosmosDBMongoDBDatabaseThroughputUpdate.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBMongoDBDatabaseThroughputUpdate(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getMongoDBResources()
            .updateMongoDBDatabaseThroughput(
                "rg1",
                "ddb1",
                "databaseName",
                new ThroughputSettingsUpdateParameters()
                    .withLocation("West US")
                    .withTags(mapOf())
                    .withResource(new ThroughputSettingsResource().withThroughput(400)),
                Context.NONE);
    }

    @SuppressWarnings("unchecked")
    private static <T> Map<String, T> mapOf(Object... inputs) {
        Map<String, T> map = new HashMap<>();
        for (int i = 0; i < inputs.length; i += 2) {
            String key = (String) inputs[i];
            T value = (T) inputs[i + 1];
            map.put(key, value);
        }
        return map;
    }
}
