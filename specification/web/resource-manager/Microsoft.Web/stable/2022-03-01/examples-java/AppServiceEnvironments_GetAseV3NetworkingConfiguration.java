import com.azure.core.util.Context;

/** Samples for AppServiceEnvironments GetAseV3NetworkingConfiguration. */
public final class Main {
    /*
     * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/AppServiceEnvironments_GetAseV3NetworkingConfiguration.json
     */
    /**
     * Sample code: Get networking configuration of an App Service Environment.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getNetworkingConfigurationOfAnAppServiceEnvironment(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .webApps()
            .manager()
            .serviceClient()
            .getAppServiceEnvironments()
            .getAseV3NetworkingConfigurationWithResponse("test-rg", "test-ase", Context.NONE);
    }
}
