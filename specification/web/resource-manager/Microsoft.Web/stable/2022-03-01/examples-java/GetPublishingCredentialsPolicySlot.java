import com.azure.core.util.Context;

/** Samples for WebApps GetScmAllowedSlot. */
public final class Main {
    /*
     * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/GetPublishingCredentialsPolicySlot.json
     */
    /**
     * Sample code: Get SCM Allowed.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getSCMAllowed(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .webApps()
            .manager()
            .serviceClient()
            .getWebApps()
            .getScmAllowedSlotWithResponse("rg", "testSite", "stage", Context.NONE);
    }
}
