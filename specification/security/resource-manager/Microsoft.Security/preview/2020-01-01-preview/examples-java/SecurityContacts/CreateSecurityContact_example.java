import com.azure.resourcemanager.security.models.MinimalSeverity;
import com.azure.resourcemanager.security.models.Roles;
import com.azure.resourcemanager.security.models.SecurityContactPropertiesAlertNotifications;
import com.azure.resourcemanager.security.models.SecurityContactPropertiesNotificationsByRole;
import com.azure.resourcemanager.security.models.State;
import java.util.Arrays;

/** Samples for SecurityContacts Create. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2020-01-01-preview/examples/SecurityContacts/CreateSecurityContact_example.json
     */
    /**
     * Sample code: Create security contact data.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void createSecurityContactData(com.azure.resourcemanager.security.SecurityManager manager) {
        manager
            .securityContacts()
            .define("default")
            .withEmails("john@contoso.com;jane@contoso.com")
            .withPhone("(214)275-4038")
            .withAlertNotifications(
                new SecurityContactPropertiesAlertNotifications()
                    .withState(State.fromString("On"))
                    .withMinimalSeverity(MinimalSeverity.LOW))
            .withNotificationsByRole(
                new SecurityContactPropertiesNotificationsByRole()
                    .withState(State.fromString("On"))
                    .withRoles(Arrays.asList(Roles.OWNER)))
            .create();
    }
}
