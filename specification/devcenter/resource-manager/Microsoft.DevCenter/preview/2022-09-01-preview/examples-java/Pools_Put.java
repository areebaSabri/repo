import com.azure.resourcemanager.devcenter.models.LicenseType;
import com.azure.resourcemanager.devcenter.models.LocalAdminStatus;

/** Samples for Pools CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-09-01-preview/examples/Pools_Put.json
     */
    /**
     * Sample code: Pools_CreateOrUpdate.
     *
     * @param manager Entry point to DevCenterManager.
     */
    public static void poolsCreateOrUpdate(com.azure.resourcemanager.devcenter.DevCenterManager manager) {
        manager
            .pools()
            .define("{poolName}")
            .withRegion("centralus")
            .withExistingProject("rg1", "{projectName}")
            .withDevBoxDefinitionName("WebDevBox")
            .withNetworkConnectionName("Network1-westus2")
            .withLicenseType(LicenseType.WINDOWS_CLIENT)
            .withLocalAdministrator(LocalAdminStatus.ENABLED)
            .create();
    }
}
