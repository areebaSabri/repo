import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.fluent.models.ManagedInstanceLongTermRetentionPolicyInner;
import com.azure.resourcemanager.sql.models.ManagedInstanceLongTermRetentionPolicyName;

/** Samples for ManagedInstanceLongTermRetentionPolicies CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2018-06-01-preview/examples/ManagedInstanceLongTermRetentionPolicyCreateOrUpdate.json
     */
    /**
     * Sample code: Create or update the LTR policy for the managed database.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createOrUpdateTheLTRPolicyForTheManagedDatabase(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getManagedInstanceLongTermRetentionPolicies()
            .createOrUpdate(
                "testResourceGroup",
                "testInstance",
                "testDatabase",
                ManagedInstanceLongTermRetentionPolicyName.DEFAULT,
                new ManagedInstanceLongTermRetentionPolicyInner()
                    .withWeeklyRetention("P1M")
                    .withMonthlyRetention("P1Y")
                    .withYearlyRetention("P5Y")
                    .withWeekOfYear(5),
                Context.NONE);
    }
}
