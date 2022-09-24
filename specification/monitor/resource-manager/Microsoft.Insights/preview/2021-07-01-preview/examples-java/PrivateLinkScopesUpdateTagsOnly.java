import com.azure.core.util.Context;
import com.azure.resourcemanager.monitor.models.TagsResource;
import java.util.HashMap;
import java.util.Map;

/** Samples for PrivateLinkScopes UpdateTags. */
public final class Main {
    /*
     * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-07-01-preview/examples/PrivateLinkScopesUpdateTagsOnly.json
     */
    /**
     * Sample code: PrivateLinkScopeUpdateTagsOnly.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void privateLinkScopeUpdateTagsOnly(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .diagnosticSettings()
            .manager()
            .serviceClient()
            .getPrivateLinkScopes()
            .updateTagsWithResponse(
                "my-resource-group",
                "my-privatelinkscope",
                new TagsResource().withTags(mapOf("Tag1", "Value1", "Tag2", "Value2")),
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
