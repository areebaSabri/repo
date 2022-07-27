import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.models.ManagedDatabaseUpdate;
import java.util.HashMap;
import java.util.Map;

/** Samples for ManagedDatabases Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2019-06-01-preview/examples/ManagedDatabaseUpdateMin.json
     */
    /**
     * Sample code: Updates a managed database with minimal properties.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void updatesAManagedDatabaseWithMinimalProperties(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getManagedDatabases()
            .update(
                "Default-SQL-SouthEastAsia",
                "managedInstance",
                "testdb",
                new ManagedDatabaseUpdate().withTags(mapOf("tagKey1", "TagValue1")),
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
