import com.azure.resourcemanager.devcenter.models.EnableStatus;
import com.azure.resourcemanager.devcenter.models.EnvironmentRole;
import com.azure.resourcemanager.devcenter.models.ManagedServiceIdentity;
import com.azure.resourcemanager.devcenter.models.ManagedServiceIdentityType;
import com.azure.resourcemanager.devcenter.models.ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignment;
import com.azure.resourcemanager.devcenter.models.UserAssignedIdentity;
import com.azure.resourcemanager.devcenter.models.UserRoleAssignmentValue;
import java.util.HashMap;
import java.util.Map;

/** Samples for ProjectEnvironmentTypes CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-09-01-preview/examples/ProjectEnvironmentTypes_Put.json
     */
    /**
     * Sample code: ProjectEnvironmentTypes_CreateOrUpdate.
     *
     * @param manager Entry point to DevCenterManager.
     */
    public static void projectEnvironmentTypesCreateOrUpdate(
        com.azure.resourcemanager.devcenter.DevCenterManager manager) {
        manager
            .projectEnvironmentTypes()
            .define("{environmentTypeName}")
            .withExistingProject("rg1", "ContosoProj")
            .withTags(mapOf("CostCenter", "RnD"))
            .withIdentity(
                new ManagedServiceIdentity()
                    .withType(ManagedServiceIdentityType.USER_ASSIGNED)
                    .withUserAssignedIdentities(
                        mapOf(
                            "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/identityGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity1",
                            new UserAssignedIdentity())))
            .withDeploymentTargetId("/subscriptions/00000000-0000-0000-0000-000000000000")
            .withStatus(EnableStatus.ENABLED)
            .withCreatorRoleAssignment(
                new ProjectEnvironmentTypeUpdatePropertiesCreatorRoleAssignment()
                    .withRoles(mapOf("4cbf0b6c-e750-441c-98a7-10da8387e4d6", new EnvironmentRole())))
            .withUserRoleAssignments(
                mapOf(
                    "e45e3m7c-176e-416a-b466-0c5ec8298f8a",
                    new UserRoleAssignmentValue()
                        .withRoles(mapOf("4cbf0b6c-e750-441c-98a7-10da8387e4d6", new EnvironmentRole()))))
            .create();
    }

    @SuppressWarnings("unchecked")
    private static <T> Map<String, T> mapOf(Object... inputs) {
        Map<String, T> map = new HashMap<>();
        for (int i = 0; i < inputs.length; i += 2) {
            String key = (String) inputs[i];
            T value = (T) inputs[i + 1];
            map.put(key, value);
        }
        return map;
    }
}
