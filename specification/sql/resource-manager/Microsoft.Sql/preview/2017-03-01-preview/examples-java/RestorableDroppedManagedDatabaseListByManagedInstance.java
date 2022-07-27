import com.azure.core.util.Context;

/** Samples for RestorableDroppedManagedDatabases ListByInstance. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2017-03-01-preview/examples/RestorableDroppedManagedDatabaseListByManagedInstance.json
     */
    /**
     * Sample code: List restorable dropped databases by managed instances.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void listRestorableDroppedDatabasesByManagedInstances(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getRestorableDroppedManagedDatabases()
            .listByInstance("Test1", "managedInstance", Context.NONE);
    }
}
