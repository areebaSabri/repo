import com.azure.core.util.Context;

/** Samples for AppServiceCertificateOrders ListByResourceGroup. */
public final class Main {
    /*
     * x-ms-original-file: specification/web/resource-manager/Microsoft.CertificateRegistration/stable/2022-03-01/examples/ListAppServiceCertificateOrdersByResourceGroup.json
     */
    /**
     * Sample code: List App Service Certificate orders by resource group.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void listAppServiceCertificateOrdersByResourceGroup(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .webApps()
            .manager()
            .serviceClient()
            .getAppServiceCertificateOrders()
            .listByResourceGroup("testrg123", Context.NONE);
    }
}
