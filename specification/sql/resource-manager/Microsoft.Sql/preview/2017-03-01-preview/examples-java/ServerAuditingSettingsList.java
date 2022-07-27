import com.azure.core.util.Context;

/** Samples for ServerBlobAuditingPolicies ListByServer. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2017-03-01-preview/examples/ServerAuditingSettingsList.json
     */
    /**
     * Sample code: List auditing settings of a server.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void listAuditingSettingsOfAServer(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getServerBlobAuditingPolicies()
            .listByServer("blobauditingtest-4799", "blobauditingtest-6440", Context.NONE);
    }
}
