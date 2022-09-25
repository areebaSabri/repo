import com.azure.core.management.SubResource;
import com.azure.core.util.Context;
import com.azure.resourcemanager.compute.models.AvailabilitySetUpdate;
import com.azure.resourcemanager.compute.models.Sku;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/** Samples for AvailabilitySets Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/availabilitySetExamples/AvailabilitySets_Update_MaximumSet_Gen.json
     */
    /**
     * Sample code: AvailabilitySets_Update_MaximumSet_Gen.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void availabilitySetsUpdateMaximumSetGen(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .virtualMachines()
            .manager()
            .serviceClient()
            .getAvailabilitySets()
            .updateWithResponse(
                "rgcompute",
                "aaaaaaaaaaaaaaaaaaa",
                new AvailabilitySetUpdate()
                    .withTags(mapOf("key2574", "aaaaaaaa"))
                    .withSku(new Sku().withName("DSv3-Type1").withTier("aaa").withCapacity(7L))
                    .withPlatformUpdateDomainCount(20)
                    .withPlatformFaultDomainCount(2)
                    .withVirtualMachines(
                        Arrays
                            .asList(
                                new SubResource()
                                    .withId(
                                        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}")))
                    .withProximityPlacementGroup(
                        new SubResource()
                            .withId(
                                "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}")),
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
