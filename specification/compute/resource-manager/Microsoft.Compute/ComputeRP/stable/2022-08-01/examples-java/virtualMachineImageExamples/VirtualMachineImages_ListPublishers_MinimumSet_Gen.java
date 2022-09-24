import com.azure.core.util.Context;

/** Samples for VirtualMachineImages ListPublishers. */
public final class Main {
    /*
     * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/virtualMachineImageExamples/VirtualMachineImages_ListPublishers_MinimumSet_Gen.json
     */
    /**
     * Sample code: VirtualMachineImages_ListPublishers_MinimumSet_Gen.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void virtualMachineImagesListPublishersMinimumSetGen(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .virtualMachines()
            .manager()
            .serviceClient()
            .getVirtualMachineImages()
            .listPublishersWithResponse("aaaaaaaaaaaaaaaaaaaaaaaaaaa", Context.NONE);
    }
}
