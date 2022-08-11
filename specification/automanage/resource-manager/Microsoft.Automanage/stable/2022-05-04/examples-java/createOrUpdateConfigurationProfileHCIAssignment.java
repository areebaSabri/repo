import com.azure.core.util.Context;
import com.azure.resourcemanager.automanage.fluent.models.ConfigurationProfileAssignmentInner;
import com.azure.resourcemanager.automanage.models.ConfigurationProfileAssignmentProperties;

/** Samples for ConfigurationProfileHciAssignments CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/automanage/resource-manager/Microsoft.Automanage/stable/2022-05-04/examples/createOrUpdateConfigurationProfileHCIAssignment.json
     */
    /**
     * Sample code: Create or update a HCI configuration profile assignment.
     *
     * @param manager Entry point to AutomanageManager.
     */
    public static void createOrUpdateAHCIConfigurationProfileAssignment(
        com.azure.resourcemanager.automanage.AutomanageManager manager) {
        manager
            .configurationProfileHciAssignments()
            .createOrUpdateWithResponse(
                "myResourceGroupName",
                "myClusterName",
                "default",
                new ConfigurationProfileAssignmentInner()
                    .withProperties(
                        new ConfigurationProfileAssignmentProperties()
                            .withConfigurationProfile(
                                "/providers/Microsoft.Automanage/bestPractices/AzureBestPracticesProduction")),
                Context.NONE);
    }
}
