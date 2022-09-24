import com.azure.core.util.Context;

/** Samples for Alerts UpdateResourceGroupLevelStateToInProgress. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2022-01-01/examples/Alerts/UpdateAlertResourceGroupLocation_inProgress_example.json
     */
    /**
     * Sample code: Update security alert state on a resource group from a security data location.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void updateSecurityAlertStateOnAResourceGroupFromASecurityDataLocation(
        com.azure.resourcemanager.security.SecurityManager manager) {
        manager
            .alerts()
            .updateResourceGroupLevelStateToInProgressWithResponse(
                "myRg2", "westeurope", "2518765996949954086_2325cf9e-42a2-4f72-ae7f-9b863cba2d22", Context.NONE);
    }
}
