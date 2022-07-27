import com.azure.core.util.Context;

/** Samples for AppServiceEnvironments Resume. */
public final class Main {
    /*
     * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/AppServiceEnvironments_Resume.json
     */
    /**
     * Sample code: Resume an App Service Environment.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void resumeAnAppServiceEnvironment(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .webApps()
            .manager()
            .serviceClient()
            .getAppServiceEnvironments()
            .resume("test-rg", "test-ase", Context.NONE);
    }
}
