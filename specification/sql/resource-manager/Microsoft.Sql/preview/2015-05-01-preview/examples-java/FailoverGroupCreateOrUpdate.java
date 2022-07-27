import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.fluent.models.FailoverGroupInner;
import com.azure.resourcemanager.sql.models.FailoverGroupReadOnlyEndpoint;
import com.azure.resourcemanager.sql.models.FailoverGroupReadWriteEndpoint;
import com.azure.resourcemanager.sql.models.PartnerInfo;
import com.azure.resourcemanager.sql.models.ReadOnlyEndpointFailoverPolicy;
import com.azure.resourcemanager.sql.models.ReadWriteEndpointFailoverPolicy;
import java.util.Arrays;

/** Samples for FailoverGroups CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2015-05-01-preview/examples/FailoverGroupCreateOrUpdate.json
     */
    /**
     * Sample code: Create failover group.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createFailoverGroup(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getFailoverGroups()
            .createOrUpdate(
                "Default",
                "failover-group-primary-server",
                "failover-group-test-3",
                new FailoverGroupInner()
                    .withReadWriteEndpoint(
                        new FailoverGroupReadWriteEndpoint()
                            .withFailoverPolicy(ReadWriteEndpointFailoverPolicy.AUTOMATIC)
                            .withFailoverWithDataLossGracePeriodMinutes(480))
                    .withReadOnlyEndpoint(
                        new FailoverGroupReadOnlyEndpoint().withFailoverPolicy(ReadOnlyEndpointFailoverPolicy.DISABLED))
                    .withPartnerServers(
                        Arrays
                            .asList(
                                new PartnerInfo()
                                    .withId(
                                        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/servers/failover-group-secondary-server")))
                    .withDatabases(
                        Arrays
                            .asList(
                                "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/servers/failover-group-primary-server/databases/testdb-1",
                                "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/servers/failover-group-primary-server/databases/testdb-2")),
                Context.NONE);
    }
}
