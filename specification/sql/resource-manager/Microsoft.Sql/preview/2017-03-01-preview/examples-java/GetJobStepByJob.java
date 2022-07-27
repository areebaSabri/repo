import com.azure.core.util.Context;

/** Samples for JobSteps Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2017-03-01-preview/examples/GetJobStepByJob.json
     */
    /**
     * Sample code: Get the latest version of a job step.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getTheLatestVersionOfAJobStep(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getJobSteps()
            .getWithResponse("group1", "server1", "agent1", "job1", "step1", Context.NONE);
    }
}
