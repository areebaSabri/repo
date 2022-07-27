import com.azure.core.util.Context;

/** Samples for ManagedDatabases ListByInstance. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2019-06-01-preview/examples/ManagedDatabaseListByManagedInstance.json
     */
    /**
     * Sample code: List databases by managed instances.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void listDatabasesByManagedInstances(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getManagedDatabases()
            .listByInstance("Test1", "managedInstance", Context.NONE);
    }
}
