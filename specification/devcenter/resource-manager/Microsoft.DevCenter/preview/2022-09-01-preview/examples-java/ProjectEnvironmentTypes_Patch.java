import com.azure.core.util.Context;
import com.azure.resourcemanager.devcenter.models.EnableStatus;
import com.azure.resourcemanager.devcenter.models.EnvironmentRole;
import com.azure.resourcemanager.devcenter.models.ManagedServiceIdentity;
import com.azure.resourcemanager.devcenter.models.ManagedServiceIdentityType;
import com.azure.resourcemanager.devcenter.models.ProjectEnvironmentType;
import com.azure.resourcemanager.devcenter.models.UserAssignedIdentity;
import com.azure.resourcemanager.devcenter.models.UserRoleAssignmentValue;
import java.util.HashMap;
import java.util.Map;

/** Samples for ProjectEnvironmentTypes Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-09-01-preview/examples/ProjectEnvironmentTypes_Patch.json
     */
    /**
     * Sample code: ProjectEnvironmentTypes_Update.
     *
     * @param manager Entry point to DevCenterManager.
     */
    public static void projectEnvironmentTypesUpdate(com.azure.resourcemanager.devcenter.DevCenterManager manager) {
        ProjectEnvironmentType resource =
            manager
                .projectEnvironmentTypes()
                .getWithResponse("rg1", "ContosoProj", "{environmentTypeName}", Context.NONE)
                .getValue();
        resource
            .update()
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
            .withUserRoleAssignments(
                mapOf(
                    "e45e3m7c-176e-416a-b466-0c5ec8298f8a",
                    new UserRoleAssignmentValue()
                        .withRoles(mapOf("4cbf0b6c-e750-441c-98a7-10da8387e4d6", new EnvironmentRole()))))
            .apply();
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
