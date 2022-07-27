import com.azure.core.util.Context;
import java.util.UUID;

/** Samples for ManagedInstanceOperations Cancel. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2019-06-01-preview/examples/CancelManagedInstanceOperation.json
     */
    /**
     * Sample code: Cancel the managed instance management operation.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cancelTheManagedInstanceManagementOperation(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getManagedInstanceOperations()
            .cancelWithResponse(
                "sqlcrudtest-7398",
                "sqlcrudtest-4645",
                UUID.fromString("11111111-1111-1111-1111-111111111111"),
                Context.NONE);
    }
}
