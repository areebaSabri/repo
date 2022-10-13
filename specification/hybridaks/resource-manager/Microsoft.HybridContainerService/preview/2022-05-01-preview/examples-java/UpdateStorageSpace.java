import com.azure.core.util.Context;
import com.azure.resourcemanager.hybridcontainerservice.models.StorageSpaces;
import java.util.HashMap;
import java.util.Map;

/** Samples for StorageSpacesOperation Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2022-05-01-preview/examples/UpdateStorageSpace.json
     */
    /**
     * Sample code: UpdateStorageSpace.
     *
     * @param manager Entry point to HybridContainerServiceManager.
     */
    public static void updateStorageSpace(
        com.azure.resourcemanager.hybridcontainerservice.HybridContainerServiceManager manager) {
        StorageSpaces resource =
            manager
                .storageSpacesOperations()
                .getByResourceGroupWithResponse("test-arcappliance-resgrp", "test-storage", Context.NONE)
                .getValue();
        resource.update().withTags(mapOf("additionalProperties", "sample")).apply();
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
