import com.azure.core.util.Context;

/** Samples for JobSteps ListByVersion. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2017-03-01-preview/examples/ListJobStepsByVersion.json
     */
    /**
     * Sample code: List job steps for the specified version of a job.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void listJobStepsForTheSpecifiedVersionOfAJob(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getJobSteps()
            .listByVersion("group1", "server1", "agent1", "job1", 1, Context.NONE);
    }
}
