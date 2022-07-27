import com.azure.core.util.Context;

/** Samples for SyncGroups ListHubSchemas. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2015-05-01-preview/examples/SyncGroupGetHubSchema.json
     */
    /**
     * Sample code: Get a hub database schema.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getAHubDatabaseSchema(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getSyncGroups()
            .listHubSchemas(
                "syncgroupcrud-65440", "syncgroupcrud-8475", "syncgroupcrud-4328", "syncgroupcrud-3187", Context.NONE);
    }
}
