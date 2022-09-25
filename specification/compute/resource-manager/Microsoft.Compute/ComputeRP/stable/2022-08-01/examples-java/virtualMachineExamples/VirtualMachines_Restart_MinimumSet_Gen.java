import com.azure.core.util.Context;

/** Samples for VirtualMachines Restart. */
public final class Main {
    /*
     * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/virtualMachineExamples/VirtualMachines_Restart_MinimumSet_Gen.json
     */
    /**
     * Sample code: VirtualMachines_Restart_MinimumSet_Gen.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void virtualMachinesRestartMinimumSetGen(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .virtualMachines()
            .manager()
            .serviceClient()
            .getVirtualMachines()
            .restart("rgcompute", "aaa", Context.NONE);
    }
}
