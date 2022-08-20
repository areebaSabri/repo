/** Samples for InventoryItems Create. */
public final class Main {
    /*
     * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/CreateInventoryItem.json
     */
    /**
     * Sample code: CreateInventoryItem.
     *
     * @param manager Entry point to ConnectedVMwareManager.
     */
    public static void createInventoryItem(com.azure.resourcemanager.connectedvmware.ConnectedVMwareManager manager) {
        manager.inventoryItems().define("testItem").withExistingVcenter("testrg", "ContosoVCenter").create();
    }
}
