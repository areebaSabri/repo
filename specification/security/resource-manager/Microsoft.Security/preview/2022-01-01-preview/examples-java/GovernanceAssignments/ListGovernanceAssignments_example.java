import com.azure.core.util.Context;

/** Samples for GovernanceAssignments List. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2022-01-01-preview/examples/GovernanceAssignments/ListGovernanceAssignments_example.json
     */
    /**
     * Sample code: List security governanceAssignments.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void listSecurityGovernanceAssignments(com.azure.resourcemanager.security.SecurityManager manager) {
        manager
            .governanceAssignments()
            .list(
                "subscriptions/c32e05d9-7207-4e22-bdf4-4f7d9c72e5fd",
                "6b9421dd-5555-2251-9b3d-2be58e2f82cd",
                Context.NONE);
    }
}
