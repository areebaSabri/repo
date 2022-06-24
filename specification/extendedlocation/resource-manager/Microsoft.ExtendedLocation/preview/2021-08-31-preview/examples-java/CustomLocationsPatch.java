import com.azure.core.util.Context;
import com.azure.resourcemanager.extendedlocation.models.CustomLocation;
import com.azure.resourcemanager.extendedlocation.models.Identity;
import com.azure.resourcemanager.extendedlocation.models.ResourceIdentityType;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/** Samples for CustomLocations Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/extendedlocation/resource-manager/Microsoft.ExtendedLocation/preview/2021-08-31-preview/examples/CustomLocationsPatch.json
     */
    /**
     * Sample code: Update Custom Location.
     *
     * @param manager Entry point to CustomLocationsManager.
     */
    public static void updateCustomLocation(com.azure.resourcemanager.extendedlocation.CustomLocationsManager manager) {
        CustomLocation resource =
            manager
                .customLocations()
                .getByResourceGroupWithResponse("testresourcegroup", "customLocation01", Context.NONE)
                .getValue();
        resource
            .update()
            .withTags(mapOf("archv3", "", "tier", "testing"))
            .withIdentity(new Identity().withType(ResourceIdentityType.SYSTEM_ASSIGNED))
            .withClusterExtensionIds(
                Arrays
                    .asList(
                        "/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/testresourcegroup/providers/Microsoft.ContainerService/managedClusters/cluster01/Microsoft.KubernetesConfiguration/clusterExtensions/fooExtension",
                        "/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/testresourcegroup/providers/Microsoft.ContainerService/managedClusters/cluster01/Microsoft.KubernetesConfiguration/clusterExtensions/barExtension"))
            .apply();
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
