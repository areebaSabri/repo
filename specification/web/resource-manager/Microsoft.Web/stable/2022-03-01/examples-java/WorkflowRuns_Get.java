import com.azure.core.util.Context;

/** Samples for WorkflowRuns Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/WorkflowRuns_Get.json
     */
    /**
     * Sample code: Get a run for a workflow.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getARunForAWorkflow(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .webApps()
            .manager()
            .serviceClient()
            .getWorkflowRuns()
            .getWithResponse(
                "test-resource-group", "test-name", "test-workflow", "08586676746934337772206998657CU22", Context.NONE);
    }
}
