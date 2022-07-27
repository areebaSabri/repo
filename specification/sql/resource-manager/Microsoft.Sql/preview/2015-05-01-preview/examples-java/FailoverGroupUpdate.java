import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.models.FailoverGroupReadWriteEndpoint;
import com.azure.resourcemanager.sql.models.FailoverGroupUpdate;
import com.azure.resourcemanager.sql.models.ReadWriteEndpointFailoverPolicy;
import java.util.Arrays;

/** Samples for FailoverGroups Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2015-05-01-preview/examples/FailoverGroupUpdate.json
     */
    /**
     * Sample code: Update failover group.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void updateFailoverGroup(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getFailoverGroups()
            .update(
                "Default",
                "failover-group-primary-server",
                "failover-group-test-1",
                new FailoverGroupUpdate()
                    .withReadWriteEndpoint(
                        new FailoverGroupReadWriteEndpoint()
                            .withFailoverPolicy(ReadWriteEndpointFailoverPolicy.AUTOMATIC)
                            .withFailoverWithDataLossGracePeriodMinutes(120))
                    .withDatabases(
                        Arrays
                            .asList(
                                "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/servers/failover-group-primary-server/databases/testdb-1")),
                Context.NONE);
    }
}
