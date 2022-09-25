import com.azure.core.util.Context;

/** Samples for AvailabilitySets Delete. */
public final class Main {
    /*
     * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/availabilitySetExamples/AvailabilitySets_Delete_MaximumSet_Gen.json
     */
    /**
     * Sample code: AvailabilitySets_Delete_MaximumSet_Gen.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void availabilitySetsDeleteMaximumSetGen(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .virtualMachines()
            .manager()
            .serviceClient()
            .getAvailabilitySets()
            .deleteWithResponse("rgcompute", "aaaaaaaaaaaaaaaaaaaa", Context.NONE);
    }
}
