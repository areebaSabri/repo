import java.util.HashMap;
import java.util.Map;

/** Samples for FarmBeatsModels CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/agrifood/resource-manager/Microsoft.AgFoodPlatform/preview/2021-09-01-preview/examples/FarmBeatsModels_CreateOrUpdate.json
     */
    /**
     * Sample code: FarmBeatsModels_CreateOrUpdate.
     *
     * @param manager Entry point to AgriFoodManager.
     */
    public static void farmBeatsModelsCreateOrUpdate(com.azure.resourcemanager.agrifood.AgriFoodManager manager) {
        manager
            .farmBeatsModels()
            .define("examples-farmbeatsResourceName")
            .withRegion("eastus2")
            .withExistingResourceGroup("examples-rg")
            .withTags(mapOf("key1", "value1", "key2", "value2"))
            .create();
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
