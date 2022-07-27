import com.azure.core.util.Context;

/** Samples for JobAgents Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2017-03-01-preview/examples/GetJobAgent.json
     */
    /**
     * Sample code: Get a job agent.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getAJobAgent(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getJobAgents()
            .getWithResponse("group1", "server1", "agent1", Context.NONE);
    }
}
