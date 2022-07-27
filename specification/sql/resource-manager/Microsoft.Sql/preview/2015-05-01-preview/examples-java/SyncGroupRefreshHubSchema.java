import com.azure.core.util.Context;

/** Samples for SyncGroups RefreshHubSchema. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2015-05-01-preview/examples/SyncGroupRefreshHubSchema.json
     */
    /**
     * Sample code: Refresh a hub database schema.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void refreshAHubDatabaseSchema(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getSyncGroups()
            .refreshHubSchema(
                "syncgroupcrud-65440", "syncgroupcrud-8475", "syncgroupcrud-4328", "syncgroupcrud-3187", Context.NONE);
    }
}
