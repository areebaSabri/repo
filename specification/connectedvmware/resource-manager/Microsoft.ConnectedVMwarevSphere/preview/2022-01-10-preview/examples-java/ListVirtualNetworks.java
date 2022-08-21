import com.azure.core.util.Context;

/** Samples for VirtualNetworks List. */
public final class Main {
    /*
     * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/ListVirtualNetworks.json
     */
    /**
     * Sample code: ListVirtualNetworks.
     *
     * @param manager Entry point to ConnectedVMwareManager.
     */
    public static void listVirtualNetworks(com.azure.resourcemanager.connectedvmware.ConnectedVMwareManager manager) {
        manager.virtualNetworks().list(Context.NONE);
    }
}
