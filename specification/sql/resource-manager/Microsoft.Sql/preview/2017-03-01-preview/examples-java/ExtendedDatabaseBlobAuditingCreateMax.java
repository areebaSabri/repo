import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.fluent.models.ExtendedDatabaseBlobAuditingPolicyInner;
import com.azure.resourcemanager.sql.models.BlobAuditingPolicyState;
import java.util.Arrays;
import java.util.UUID;

/** Samples for ExtendedDatabaseBlobAuditingPolicies CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2017-03-01-preview/examples/ExtendedDatabaseBlobAuditingCreateMax.json
     */
    /**
     * Sample code: Create or update an extended database's blob auditing policy with all parameters.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createOrUpdateAnExtendedDatabaseSBlobAuditingPolicyWithAllParameters(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getExtendedDatabaseBlobAuditingPolicies()
            .createOrUpdateWithResponse(
                "blobauditingtest-4799",
                "blobauditingtest-6440",
                "testdb",
                new ExtendedDatabaseBlobAuditingPolicyInner()
                    .withPredicateExpression("statement = 'select 1'")
                    .withState(BlobAuditingPolicyState.ENABLED)
                    .withStorageEndpoint("https://mystorage.blob.core.windows.net")
                    .withStorageAccountAccessKey(
                        "sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD==")
                    .withRetentionDays(6)
                    .withAuditActionsAndGroups(
                        Arrays
                            .asList(
                                "DATABASE_LOGOUT_GROUP",
                                "DATABASE_ROLE_MEMBER_CHANGE_GROUP",
                                "UPDATE on database::TestDatabaseName by public"))
                    .withStorageAccountSubscriptionId(UUID.fromString("00000000-1234-0000-5678-000000000000"))
                    .withIsStorageSecondaryKeyInUse(false)
                    .withIsAzureMonitorTargetEnabled(true),
                Context.NONE);
    }
}
