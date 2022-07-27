import com.azure.core.util.Context;

/** Samples for ServerDnsAliases Delete. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2017-03-01-preview/examples/ServerDnsAliasDelete.json
     */
    /**
     * Sample code: Delete server DNS alias.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void deleteServerDNSAlias(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getServerDnsAliases()
            .delete("Default", "dns-alias-server", "dns-alias-name-1", Context.NONE);
    }
}
