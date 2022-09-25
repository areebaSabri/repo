import com.azure.core.util.Context;
import com.azure.resourcemanager.monitor.models.LogProfileResourcePatch;
import com.azure.resourcemanager.monitor.models.RetentionPolicy;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/** Samples for LogProfiles Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2016-03-01/examples/patchLogProfile.json
     */
    /**
     * Sample code: Patch a log profile.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void patchALogProfile(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .diagnosticSettings()
            .manager()
            .serviceClient()
            .getLogProfiles()
            .updateWithResponse(
                "Rac46PostSwapRG",
                new LogProfileResourcePatch()
                    .withTags(mapOf("key1", "value1"))
                    .withStorageAccountId(
                        "/subscriptions/df602c9c-7aa0-407d-a6fb-eb20c8bd1192/resourceGroups/JohnKemTest/providers/Microsoft.Storage/storageAccounts/johnkemtest8162")
                    .withServiceBusRuleId("")
                    .withLocations(Arrays.asList("global"))
                    .withCategories(Arrays.asList("Write", "Delete", "Action"))
                    .withRetentionPolicy(new RetentionPolicy().withEnabled(true).withDays(3)),
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
