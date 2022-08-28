import com.azure.core.util.Context;

/** Samples for ScopeConnections Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/NetworkManagerScopeConnectionGet.json
     */
    /**
     * Sample code: Get Network Manager Scope Connection.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getNetworkManagerScopeConnection(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .networks()
            .manager()
            .serviceClient()
            .getScopeConnections()
            .getWithResponse("rg1", "testNetworkManager", "TestScopeConnection", Context.NONE);
    }
}
