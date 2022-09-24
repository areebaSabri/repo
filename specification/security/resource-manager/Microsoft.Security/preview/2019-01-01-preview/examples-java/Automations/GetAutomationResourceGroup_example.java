import com.azure.core.util.Context;

/** Samples for Automations GetByResourceGroup. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2019-01-01-preview/examples/Automations/GetAutomationResourceGroup_example.json
     */
    /**
     * Sample code: Retrieve a security automation.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void retrieveASecurityAutomation(com.azure.resourcemanager.security.SecurityManager manager) {
        manager.automations().getByResourceGroupWithResponse("exampleResourceGroup", "exampleAutomation", Context.NONE);
    }
}
