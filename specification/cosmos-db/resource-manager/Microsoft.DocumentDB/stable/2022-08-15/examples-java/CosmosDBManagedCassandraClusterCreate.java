import com.azure.core.util.Context;
import com.azure.resourcemanager.cosmos.fluent.models.ClusterResourceInner;
import com.azure.resourcemanager.cosmos.models.AuthenticationMethod;
import com.azure.resourcemanager.cosmos.models.Certificate;
import com.azure.resourcemanager.cosmos.models.ClusterResourceProperties;
import com.azure.resourcemanager.cosmos.models.SeedNode;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/** Samples for CassandraClusters CreateUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBManagedCassandraClusterCreate.json
     */
    /**
     * Sample code: CosmosDBManagedCassandraClusterCreate.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBManagedCassandraClusterCreate(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getCassandraClusters()
            .createUpdate(
                "cassandra-prod-rg",
                "cassandra-prod",
                new ClusterResourceInner()
                    .withLocation("West US")
                    .withTags(mapOf())
                    .withProperties(
                        new ClusterResourceProperties()
                            .withDelegatedManagementSubnetId(
                                "/subscriptions/536e130b-d7d6-4ac7-98a5-de20d69588d2/resourceGroups/customer-vnet-rg/providers/Microsoft.Network/virtualNetworks/customer-vnet/subnets/management")
                            .withCassandraVersion("3.11")
                            .withClusterNameOverride("ClusterNameIllegalForAzureResource")
                            .withAuthenticationMethod(AuthenticationMethod.CASSANDRA)
                            .withInitialCassandraAdminPassword("mypassword")
                            .withClientCertificates(
                                Arrays
                                    .asList(
                                        new Certificate()
                                            .withPem(
                                                "-----BEGIN CERTIFICATE-----\n"
                                                    + "...Base64 encoded certificate...\n"
                                                    + "-----END CERTIFICATE-----")))
                            .withExternalGossipCertificates(
                                Arrays
                                    .asList(
                                        new Certificate()
                                            .withPem(
                                                "-----BEGIN CERTIFICATE-----\n"
                                                    + "...Base64 encoded certificate...\n"
                                                    + "-----END CERTIFICATE-----")))
                            .withExternalSeedNodes(
                                Arrays
                                    .asList(
                                        new SeedNode().withIpAddress("10.52.221.2"),
                                        new SeedNode().withIpAddress("10.52.221.3"),
                                        new SeedNode().withIpAddress("10.52.221.4")))
                            .withHoursBetweenBackups(24)),
                Context.NONE);
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
