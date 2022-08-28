import com.azure.core.util.Context;

/** Samples for VpnLinkConnections GetIkeSas. */
public final class Main {
    /*
     * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/VpnSiteLinkConnectionGetIkeSas.json
     */
    /**
     * Sample code: GetVpnLinkConnectionIkeSa.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getVpnLinkConnectionIkeSa(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .networks()
            .manager()
            .serviceClient()
            .getVpnLinkConnections()
            .getIkeSas("rg1", "gateway1", "vpnConnection1", "Connection-Link1", Context.NONE);
    }
}
