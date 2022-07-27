import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.fluent.models.JobCredentialInner;

/** Samples for JobCredentials CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2017-03-01-preview/examples/CreateOrUpdateJobCredential.json
     */
    /**
     * Sample code: Create or update a credential.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createOrUpdateACredential(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getJobCredentials()
            .createOrUpdateWithResponse(
                "group1",
                "server1",
                "agent1",
                "cred1",
                new JobCredentialInner().withUsername("myuser").withPassword("<password>"),
                Context.NONE);
    }
}
