import com.azure.core.util.Context;

/** Samples for RestorableDroppedManagedDatabases Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2017-03-01-preview/examples/GetRestorableDroppedManagedDatabase.json
     */
    /**
     * Sample code: Gets a restorable dropped managed database.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getsARestorableDroppedManagedDatabase(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getRestorableDroppedManagedDatabases()
            .getWithResponse("Test1", "managedInstance", "testdb,131403269876900000", Context.NONE);
    }
}
