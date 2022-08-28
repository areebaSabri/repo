import com.azure.core.util.Context;

/** Samples for RouteFilters ListByResourceGroup. */
public final class Main {
    /*
     * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/RouteFilterListByResourceGroup.json
     */
    /**
     * Sample code: RouteFilterListByResourceGroup.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void routeFilterListByResourceGroup(com.azure.resourcemanager.AzureResourceManager azure) {
        azure.networks().manager().serviceClient().getRouteFilters().listByResourceGroup("rg1", Context.NONE);
    }
}
