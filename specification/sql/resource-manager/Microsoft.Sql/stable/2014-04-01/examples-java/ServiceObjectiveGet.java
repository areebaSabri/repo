import com.azure.core.util.Context;

/** Samples for ServiceObjectives Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/stable/2014-04-01/examples/ServiceObjectiveGet.json
     */
    /**
     * Sample code: Get a service objective.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getAServiceObjective(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getServiceObjectives()
            .getWithResponse("group1", "sqlcrudtest", "29dd7459-4a7c-4e56-be22-f0adda49440d", Context.NONE);
    }
}
