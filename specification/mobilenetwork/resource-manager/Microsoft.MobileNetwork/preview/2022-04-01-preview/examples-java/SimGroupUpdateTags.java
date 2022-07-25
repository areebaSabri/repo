import com.azure.core.util.Context;
import com.azure.resourcemanager.mobilenetwork.models.SimGroup;
import java.util.HashMap;
import java.util.Map;

/** Samples for SimGroups UpdateTags. */
public final class Main {
    /*
     * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/SimGroupUpdateTags.json
     */
    /**
     * Sample code: Update SIM group tags.
     *
     * @param manager Entry point to MobileNetworkManager.
     */
    public static void updateSIMGroupTags(com.azure.resourcemanager.mobilenetwork.MobileNetworkManager manager) {
        SimGroup resource =
            manager.simGroups().getByResourceGroupWithResponse("rg1", "testSimGroup", Context.NONE).getValue();
        resource.update().withTags(mapOf("tag1", "value1", "tag2", "value2")).apply();
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
