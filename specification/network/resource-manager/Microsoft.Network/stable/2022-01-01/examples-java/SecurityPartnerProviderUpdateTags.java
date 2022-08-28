import com.azure.core.util.Context;
import com.azure.resourcemanager.network.models.TagsObject;
import java.util.HashMap;
import java.util.Map;

/** Samples for SecurityPartnerProviders UpdateTags. */
public final class Main {
    /*
     * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/SecurityPartnerProviderUpdateTags.json
     */
    /**
     * Sample code: Update Security Partner Provider Tags.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void updateSecurityPartnerProviderTags(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .networks()
            .manager()
            .serviceClient()
            .getSecurityPartnerProviders()
            .updateTagsWithResponse(
                "rg1",
                "securityPartnerProvider",
                new TagsObject().withTags(mapOf("tag1", "value1", "tag2", "value2")),
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
