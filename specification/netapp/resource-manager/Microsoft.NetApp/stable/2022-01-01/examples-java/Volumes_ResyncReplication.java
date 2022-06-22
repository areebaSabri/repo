import com.azure.core.util.Context;

/** Samples for Volumes ResyncReplication. */
public final class Main {
    /*
     * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-01-01/examples/Volumes_ResyncReplication.json
     */
    /**
     * Sample code: Volumes_ResyncReplication.
     *
     * @param manager Entry point to NetAppFilesManager.
     */
    public static void volumesResyncReplication(com.azure.resourcemanager.netapp.NetAppFilesManager manager) {
        manager.volumes().resyncReplication("myRG", "account1", "pool1", "volume1", Context.NONE);
    }
}
