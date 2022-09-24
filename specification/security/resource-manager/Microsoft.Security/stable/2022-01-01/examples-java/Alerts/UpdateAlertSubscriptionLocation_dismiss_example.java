import com.azure.core.util.Context;

/** Samples for Alerts UpdateSubscriptionLevelStateToDismiss. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2022-01-01/examples/Alerts/UpdateAlertSubscriptionLocation_dismiss_example.json
     */
    /**
     * Sample code: Update security alert state on a subscription from a security data location.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void updateSecurityAlertStateOnASubscriptionFromASecurityDataLocation(
        com.azure.resourcemanager.security.SecurityManager manager) {
        manager
            .alerts()
            .updateSubscriptionLevelStateToDismissWithResponse(
                "westeurope", "2518298467986649999_4d25bfef-2d77-4a08-adc0-3e35715cc92a", Context.NONE);
    }
}
