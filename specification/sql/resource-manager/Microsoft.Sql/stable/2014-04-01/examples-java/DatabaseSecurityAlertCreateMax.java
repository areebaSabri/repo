import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.fluent.models.DatabaseSecurityAlertPolicyInner;
import com.azure.resourcemanager.sql.models.SecurityAlertPolicyEmailAccountAdmins;
import com.azure.resourcemanager.sql.models.SecurityAlertPolicyName;
import com.azure.resourcemanager.sql.models.SecurityAlertPolicyState;
import com.azure.resourcemanager.sql.models.SecurityAlertPolicyUseServerDefault;

/** Samples for DatabaseThreatDetectionPolicies CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/stable/2014-04-01/examples/DatabaseSecurityAlertCreateMax.json
     */
    /**
     * Sample code: Create database security alert policy max.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createDatabaseSecurityAlertPolicyMax(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getDatabaseThreatDetectionPolicies()
            .createOrUpdateWithResponse(
                "securityalert-4799",
                "securityalert-6440",
                "testdb",
                SecurityAlertPolicyName.DEFAULT,
                new DatabaseSecurityAlertPolicyInner()
                    .withState(SecurityAlertPolicyState.ENABLED)
                    .withDisabledAlerts("Sql_Injection;Usage_Anomaly;")
                    .withEmailAddresses("test@microsoft.com;user@microsoft.com")
                    .withEmailAccountAdmins(SecurityAlertPolicyEmailAccountAdmins.ENABLED)
                    .withStorageEndpoint("https://mystorage.blob.core.windows.net")
                    .withStorageAccountAccessKey(
                        "sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD==")
                    .withRetentionDays(6)
                    .withUseServerDefault(SecurityAlertPolicyUseServerDefault.ENABLED),
                Context.NONE);
    }
}
