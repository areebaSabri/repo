import com.azure.core.util.Context;

/** Samples for CustomEntityStoreAssignments Delete. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2021-07-01-preview/examples/CustomEntityStoreAssignments/customEntityStoreAssignmentDelete_example.json
     */
    /**
     * Sample code: Delete a custom entity store assignment.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void deleteACustomEntityStoreAssignment(com.azure.resourcemanager.security.SecurityManager manager) {
        manager
            .customEntityStoreAssignments()
            .deleteWithResponse("TestResourceGroup", "33e7cc6e-a139-4723-a0e5-76993aee0771", Context.NONE);
    }
}
