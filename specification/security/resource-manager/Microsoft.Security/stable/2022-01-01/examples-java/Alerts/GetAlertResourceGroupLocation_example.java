import com.azure.core.util.Context;

/** Samples for Alerts GetResourceGroupLevel. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2022-01-01/examples/Alerts/GetAlertResourceGroupLocation_example.json
     */
    /**
     * Sample code: Get security alert on a resource group from a security data location.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void getSecurityAlertOnAResourceGroupFromASecurityDataLocation(
        com.azure.resourcemanager.security.SecurityManager manager) {
        manager
            .alerts()
            .getResourceGroupLevelWithResponse(
                "myRg1", "westeurope", "2518298467986649999_4d25bfef-2d77-4a08-adc0-3e35715cc92a", Context.NONE);
    }
}
