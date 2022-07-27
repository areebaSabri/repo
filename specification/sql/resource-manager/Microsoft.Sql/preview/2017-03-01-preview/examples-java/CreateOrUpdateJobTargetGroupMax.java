import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.fluent.models.JobTargetGroupInner;
import com.azure.resourcemanager.sql.models.JobTarget;
import com.azure.resourcemanager.sql.models.JobTargetGroupMembershipType;
import com.azure.resourcemanager.sql.models.JobTargetType;
import java.util.Arrays;

/** Samples for JobTargetGroups CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2017-03-01-preview/examples/CreateOrUpdateJobTargetGroupMax.json
     */
    /**
     * Sample code: Create or update a target group with all properties.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createOrUpdateATargetGroupWithAllProperties(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getJobTargetGroups()
            .createOrUpdateWithResponse(
                "group1",
                "server1",
                "agent1",
                "targetGroup1",
                new JobTargetGroupInner()
                    .withMembers(
                        Arrays
                            .asList(
                                new JobTarget()
                                    .withMembershipType(JobTargetGroupMembershipType.EXCLUDE)
                                    .withType(JobTargetType.SQL_DATABASE)
                                    .withServerName("server1")
                                    .withDatabaseName("database1"),
                                new JobTarget()
                                    .withMembershipType(JobTargetGroupMembershipType.INCLUDE)
                                    .withType(JobTargetType.SQL_SERVER)
                                    .withServerName("server1")
                                    .withRefreshCredential(
                                        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/testCredential"),
                                new JobTarget()
                                    .withMembershipType(JobTargetGroupMembershipType.INCLUDE)
                                    .withType(JobTargetType.SQL_ELASTIC_POOL)
                                    .withServerName("server2")
                                    .withElasticPoolName("pool1")
                                    .withRefreshCredential(
                                        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/testCredential"),
                                new JobTarget()
                                    .withMembershipType(JobTargetGroupMembershipType.INCLUDE)
                                    .withType(JobTargetType.SQL_SHARD_MAP)
                                    .withServerName("server3")
                                    .withDatabaseName("database1")
                                    .withShardMapName("shardMap1")
                                    .withRefreshCredential(
                                        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/testCredential"))),
                Context.NONE);
    }
}
