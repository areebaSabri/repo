import com.azure.core.util.Context;

/** Samples for ServiceAssociationLinks List. */
public final class Main {
    /*
     * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/VirtualNetworkGetServiceAssociationLinks.json
     */
    /**
     * Sample code: Get Service Association Links.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getServiceAssociationLinks(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .networks()
            .manager()
            .serviceClient()
            .getServiceAssociationLinks()
            .listWithResponse("rg1", "vnet", "subnet", Context.NONE);
    }
}
