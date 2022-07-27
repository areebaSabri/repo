import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.fluent.models.JobAgentInner;
import java.util.HashMap;
import java.util.Map;

/** Samples for JobAgents CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2017-03-01-preview/examples/CreateOrUpdateJobAgentMin.json
     */
    /**
     * Sample code: Create or update a job agent with minimum properties.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createOrUpdateAJobAgentWithMinimumProperties(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getJobAgents()
            .createOrUpdate(
                "group1",
                "server1",
                "agent1",
                new JobAgentInner()
                    .withLocation("southeastasia")
                    .withDatabaseId(
                        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/databases/db1"),
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
