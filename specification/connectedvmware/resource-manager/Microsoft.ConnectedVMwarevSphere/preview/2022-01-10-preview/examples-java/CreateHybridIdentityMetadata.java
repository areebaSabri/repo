/** Samples for HybridIdentityMetadata Create. */
public final class Main {
    /*
     * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/CreateHybridIdentityMetadata.json
     */
    /**
     * Sample code: CreateHybridIdentityMetadata.
     *
     * @param manager Entry point to ConnectedVMwareManager.
     */
    public static void createHybridIdentityMetadata(
        com.azure.resourcemanager.connectedvmware.ConnectedVMwareManager manager) {
        manager
            .hybridIdentityMetadatas()
            .define("default")
            .withExistingVirtualMachine("testrg", "ContosoVm")
            .withVmId("f8b82dff-38ef-4220-99ef-d3a3f86ddc6c")
            .withPublicKey("8ec7d60c-9700-40b1-8e6e-e5b2f6f477f2")
            .create();
    }
}
