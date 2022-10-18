import com.azure.core.util.Context;

/** Samples for Datastores Delete. */
public final class Main {
    /*
     * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2022-05-01/examples/Datastores_Delete.json
     */
    /**
     * Sample code: Datastores_Delete.
     *
     * @param manager Entry point to AvsManager.
     */
    public static void datastoresDelete(com.azure.resourcemanager.avs.AvsManager manager) {
        manager.datastores().delete("group1", "cloud1", "cluster1", "datastore1", Context.NONE);
    }
}
