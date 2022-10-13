import com.azure.core.util.Context;

/** Samples for VirtualNetworksOperation ListByResourceGroup. */
public final class Main {
    /*
     * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2022-05-01-preview/examples/ListVirtualNetworkByResourceGroup.json
     */
    /**
     * Sample code: ListVirtualNetworkByResourceGroup.
     *
     * @param manager Entry point to HybridContainerServiceManager.
     */
    public static void listVirtualNetworkByResourceGroup(
        com.azure.resourcemanager.hybridcontainerservice.HybridContainerServiceManager manager) {
        manager.virtualNetworksOperations().listByResourceGroup("test-arcappliance-resgrp", Context.NONE);
    }
}
