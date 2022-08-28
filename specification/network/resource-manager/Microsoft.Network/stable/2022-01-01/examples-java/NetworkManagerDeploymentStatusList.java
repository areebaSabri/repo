import com.azure.core.util.Context;
import com.azure.resourcemanager.network.models.ConfigurationType;
import com.azure.resourcemanager.network.models.NetworkManagerDeploymentStatusParameter;
import java.util.Arrays;

/** Samples for NetworkManagerDeploymentStatusOperation List. */
public final class Main {
    /*
     * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/NetworkManagerDeploymentStatusList.json
     */
    /**
     * Sample code: NetworkManagerDeploymentStatusList.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void networkManagerDeploymentStatusList(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .networks()
            .manager()
            .serviceClient()
            .getNetworkManagerDeploymentStatusOperations()
            .listWithResponse(
                "resoureGroupSample",
                "testNetworkManager",
                new NetworkManagerDeploymentStatusParameter()
                    .withRegions(Arrays.asList("eastus", "westus"))
                    .withDeploymentTypes(
                        Arrays.asList(ConfigurationType.CONNECTIVITY, ConfigurationType.fromString("AdminPolicy")))
                    .withSkipToken("FakeSkipTokenCode"),
                Context.NONE);
    }
}
