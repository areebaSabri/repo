import com.azure.core.util.Context;

/** Samples for Diagnostics ListHostingEnvironmentDetectorResponses. */
public final class Main {
    /*
     * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/Diagnostics_ListHostingEnvironmentDetectorResponses.json
     */
    /**
     * Sample code: Get App Service Environment Detector Responses.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getAppServiceEnvironmentDetectorResponses(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .webApps()
            .manager()
            .serviceClient()
            .getDiagnostics()
            .listHostingEnvironmentDetectorResponses(
                "Sample-WestUSResourceGroup", "SampleAppServiceEnvironment", Context.NONE);
    }
}
