import com.azure.core.util.Context;

/** Samples for StaticSites GetLinkedBackends. */
public final class Main {
    /*
     * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/GetLinkedBackendsForStaticSite.json
     */
    /**
     * Sample code: Get details of the linked backends registered with a static site.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getDetailsOfTheLinkedBackendsRegisteredWithAStaticSite(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .webApps()
            .manager()
            .serviceClient()
            .getStaticSites()
            .getLinkedBackends("rg", "testStaticSite0", Context.NONE);
    }
}
