import com.azure.core.util.Context;

/** Samples for Backups List. */
public final class Main {
    /*
     * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-05-01/examples/Backups_List.json
     */
    /**
     * Sample code: Backups_List.
     *
     * @param manager Entry point to NetAppFilesManager.
     */
    public static void backupsList(com.azure.resourcemanager.netapp.NetAppFilesManager manager) {
        manager.backups().list("myRG", "account1", "pool1", "volume1", Context.NONE);
    }
}
