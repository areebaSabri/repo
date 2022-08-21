import com.azure.core.util.Context;
import com.azure.resourcemanager.connectedvmware.models.Datastore;
import java.util.HashMap;
import java.util.Map;

/** Samples for Datastores Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/UpdateDatastore.json
     */
    /**
     * Sample code: UpdateDatastore.
     *
     * @param manager Entry point to ConnectedVMwareManager.
     */
    public static void updateDatastore(com.azure.resourcemanager.connectedvmware.ConnectedVMwareManager manager) {
        Datastore resource =
            manager.datastores().getByResourceGroupWithResponse("testrg", "HRDatastore", Context.NONE).getValue();
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
