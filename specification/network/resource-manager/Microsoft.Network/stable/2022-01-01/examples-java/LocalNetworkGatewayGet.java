import com.azure.core.util.Context;

/** Samples for LocalNetworkGateways GetByResourceGroup. */
public final class Main {
    /*
     * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/LocalNetworkGatewayGet.json
     */
    /**
     * Sample code: GetLocalNetworkGateway.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getLocalNetworkGateway(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .networks()
            .manager()
            .serviceClient()
            .getLocalNetworkGateways()
            .getByResourceGroupWithResponse("rg1", "localgw", Context.NONE);
    }
}
