import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.fluent.models.WorkloadGroupInner;

/** Samples for WorkloadGroups CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2019-06-01-preview/examples/CreateOrUpdateWorkloadGroupMax.json
     */
    /**
     * Sample code: Create a workload group with all properties specified.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createAWorkloadGroupWithAllPropertiesSpecified(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getWorkloadGroups()
            .createOrUpdate(
                "Default-SQL-SouthEastAsia",
                "testsvr",
                "testdb",
                "smallrc",
                new WorkloadGroupInner()
                    .withMinResourcePercent(0)
                    .withMaxResourcePercent(100)
                    .withMinResourcePercentPerRequest(3.0)
                    .withMaxResourcePercentPerRequest(3.0)
                    .withImportance("normal")
                    .withQueryExecutionTimeout(0),
                Context.NONE);
    }
}
