import com.azure.core.util.Context;
import com.azure.resourcemanager.mediaservices.models.MediaService;
import java.util.HashMap;
import java.util.Map;

/** Samples for Mediaservices Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2021-11-01/examples/async-accounts-update.json
     */
    /**
     * Sample code: Update a Media Services accounts.
     *
     * @param manager Entry point to MediaServicesManager.
     */
    public static void updateAMediaServicesAccounts(
        com.azure.resourcemanager.mediaservices.MediaServicesManager manager) {
        MediaService resource =
            manager.mediaservices().getByResourceGroupWithResponse("contoso", "contososports", Context.NONE).getValue();
        resource.update().withTags(mapOf("key1", "value3")).apply();
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
