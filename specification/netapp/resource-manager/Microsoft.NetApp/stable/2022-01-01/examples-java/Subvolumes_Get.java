import com.azure.core.util.Context;

/** Samples for Subvolumes Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-01-01/examples/Subvolumes_Get.json
     */
    /**
     * Sample code: Subvolumes_Get.
     *
     * @param manager Entry point to NetAppFilesManager.
     */
    public static void subvolumesGet(com.azure.resourcemanager.netapp.NetAppFilesManager manager) {
        manager.subvolumes().getWithResponse("myRG", "account1", "pool1", "volume1", "subvolume1", Context.NONE);
    }
}
