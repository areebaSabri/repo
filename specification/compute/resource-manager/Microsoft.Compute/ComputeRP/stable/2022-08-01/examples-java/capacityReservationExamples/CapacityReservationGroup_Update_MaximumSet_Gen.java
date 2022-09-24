import com.azure.core.util.Context;
import com.azure.resourcemanager.compute.models.CapacityReservationGroupUpdate;
import java.util.HashMap;
import java.util.Map;

/** Samples for CapacityReservationGroups Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/capacityReservationExamples/CapacityReservationGroup_Update_MaximumSet_Gen.json
     */
    /**
     * Sample code: CapacityReservationGroups_Update_MaximumSet_Gen.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void capacityReservationGroupsUpdateMaximumSetGen(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .virtualMachines()
            .manager()
            .serviceClient()
            .getCapacityReservationGroups()
            .updateWithResponse(
                "rgcompute",
                "aaaaaaaaaaaaaaaaaaaaaa",
                new CapacityReservationGroupUpdate().withTags(mapOf("key5355", "aaa")),
                Context.NONE);
    }

    @SuppressWarnings("unchecked")
    private static <T> Map<String, T> mapOf(Object... inputs) {
        Map<String, T> map = new HashMap<>();
        for (int i = 0; i < inputs.length; i += 2) {
            String key = (String) inputs[i];
            T value = (T) inputs[i + 1];
            map.put(key, value);
        }
        return map;
    }
}
