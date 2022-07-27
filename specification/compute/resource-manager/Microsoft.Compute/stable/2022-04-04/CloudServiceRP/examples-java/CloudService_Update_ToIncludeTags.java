import com.azure.core.util.Context;
import com.azure.resourcemanager.compute.models.CloudServiceUpdate;
import java.util.HashMap;
import java.util.Map;

/** Samples for CloudServices Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2022-04-04/CloudServiceRP/examples/CloudService_Update_ToIncludeTags.json
     */
    /**
     * Sample code: Update existing Cloud Service to add tags.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void updateExistingCloudServiceToAddTags(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .virtualMachines()
            .manager()
            .serviceClient()
            .getCloudServices()
            .update(
                "ConstosoRG",
                "{cs-name}",
                new CloudServiceUpdate().withTags(mapOf("Documentation", "RestAPI")),
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
