import com.azure.core.util.Context;
import com.azure.resourcemanager.network.models.P2SVpnConnectionRequest;
import java.util.Arrays;

/** Samples for VirtualNetworkGateways DisconnectVirtualNetworkGatewayVpnConnections. */
public final class Main {
    /*
     * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/VirtualNetworkGatewaysDisconnectP2sVpnConnections.json
     */
    /**
     * Sample code: Disconnect VpnConnections from Virtual Network Gateway.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void disconnectVpnConnectionsFromVirtualNetworkGateway(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .networks()
            .manager()
            .serviceClient()
            .getVirtualNetworkGateways()
            .disconnectVirtualNetworkGatewayVpnConnections(
                "vpn-gateway-test",
                "vpngateway",
                new P2SVpnConnectionRequest().withVpnConnectionIds(Arrays.asList("vpnconnId1", "vpnconnId2")),
                Context.NONE);
    }
}
