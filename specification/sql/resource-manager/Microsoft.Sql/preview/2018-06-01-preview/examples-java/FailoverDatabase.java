import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.models.ReplicaType;

/** Samples for Databases Failover. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2018-06-01-preview/examples/FailoverDatabase.json
     */
    /**
     * Sample code: Failover an database.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void failoverAnDatabase(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getDatabases()
            .failover("group1", "testServer", "testDatabase", ReplicaType.PRIMARY, Context.NONE);
    }
}
