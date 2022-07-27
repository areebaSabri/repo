import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.models.InstancePoolUpdate;
import java.util.HashMap;
import java.util.Map;

/** Samples for InstancePools Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2018-06-01-preview/examples/PatchInstancePool.json
     */
    /**
     * Sample code: Patch an instance pool.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void patchAnInstancePool(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getInstancePools()
            .update("group1", "testIP", new InstancePoolUpdate().withTags(mapOf("x", "y")), Context.NONE);
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
