import com.azure.resourcemanager.securitydevops.models.AutoDiscovery;
import com.azure.resourcemanager.securitydevops.models.AzureDevOpsOrgProperties;

/** Samples for AzureDevOpsOrg CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/securitydevops/resource-manager/Microsoft.SecurityDevOps/preview/2022-09-01-preview/examples/AzureDevOpsOrgCreateOrUpdate.json
     */
    /**
     * Sample code: AzureDevOpsOrg_CreateOrUpdate.
     *
     * @param manager Entry point to SecurityDevOpsManager.
     */
    public static void azureDevOpsOrgCreateOrUpdate(
        com.azure.resourcemanager.securitydevops.SecurityDevOpsManager manager) {
        manager
            .azureDevOpsOrgs()
            .define("myOrg")
            .withExistingAzureDevOpsConnector("westusrg", "testconnector")
            .withProperties(new AzureDevOpsOrgProperties().withAutoDiscovery(AutoDiscovery.DISABLED))
            .create();
    }
}
