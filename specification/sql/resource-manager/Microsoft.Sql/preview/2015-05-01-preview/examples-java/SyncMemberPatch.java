import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.fluent.models.SyncMemberInner;
import com.azure.resourcemanager.sql.models.SyncDirection;
import com.azure.resourcemanager.sql.models.SyncMemberDbType;

/** Samples for SyncMembers Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2015-05-01-preview/examples/SyncMemberPatch.json
     */
    /**
     * Sample code: Update an existing sync member.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void updateAnExistingSyncMember(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getSyncMembers()
            .update(
                "syncgroupcrud-65440",
                "syncgroupcrud-8475",
                "syncgroupcrud-4328",
                "syncgroupcrud-3187",
                "syncgroupcrud-4879",
                new SyncMemberInner()
                    .withDatabaseType(SyncMemberDbType.AZURE_SQL_DATABASE)
                    .withServerName("syncgroupcrud-3379.database.windows.net")
                    .withDatabaseName("syncgroupcrud-7421")
                    .withUsername("myUser")
                    .withSyncDirection(SyncDirection.BIDIRECTIONAL),
                Context.NONE);
    }
}
