import com.azure.core.util.Context;
import com.azure.resourcemanager.cosmos.fluent.models.DataCenterResourceInner;
import com.azure.resourcemanager.cosmos.models.DataCenterResourceProperties;

/** Samples for CassandraDataCenters Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBManagedCassandraDataCenterPatch.json
     */
    /**
     * Sample code: CosmosDBManagedCassandraDataCenterUpdate.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBManagedCassandraDataCenterUpdate(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getCassandraDataCenters()
            .update(
                "cassandra-prod-rg",
                "cassandra-prod",
                "dc1",
                new DataCenterResourceInner()
                    .withProperties(
                        new DataCenterResourceProperties()
                            .withDataCenterLocation("West US 2")
                            .withDelegatedSubnetId(
                                "/subscriptions/536e130b-d7d6-4ac7-98a5-de20d69588d2/resourceGroups/customer-vnet-rg/providers/Microsoft.Network/virtualNetworks/customer-vnet/subnets/dc1-subnet")
                            .withNodeCount(9)
                            .withBase64EncodedCassandraYamlFragment(
                                "Y29tcGFjdGlvbl90aHJvdWdocHV0X21iX3Blcl9zZWM6IDMyCmNvbXBhY3Rpb25fbGFyZ2VfcGFydGl0aW9uX3dhcm5pbmdfdGhyZXNob2xkX21iOiAxMDA=")),
                Context.NONE);
    }
}
