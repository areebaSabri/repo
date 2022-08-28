import com.azure.core.util.Context;
import com.azure.resourcemanager.network.fluent.models.NetworkManagerCommitInner;
import com.azure.resourcemanager.network.models.ConfigurationType;
import java.util.Arrays;

/** Samples for NetworkManagerCommits Post. */
public final class Main {
    /*
     * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/NetworkManagerCommitPost.json
     */
    /**
     * Sample code: NetworkManageCommitPost.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void networkManageCommitPost(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .networks()
            .manager()
            .serviceClient()
            .getNetworkManagerCommits()
            .post(
                "resoureGroupSample",
                "testNetworkManager",
                new NetworkManagerCommitInner()
                    .withTargetLocations(Arrays.asList("useast"))
                    .withConfigurationIds(
                        Arrays
                            .asList(
                                "/subscriptions/subscriptionC/resourceGroups/resoureGroupSample/providers/Microsoft.Network/networkManagers/testNetworkManager/securityAdminConfigurations/SampleSecurityAdminConfig"))
                    .withCommitType(ConfigurationType.SECURITY_ADMIN),
                Context.NONE);
    }
}
