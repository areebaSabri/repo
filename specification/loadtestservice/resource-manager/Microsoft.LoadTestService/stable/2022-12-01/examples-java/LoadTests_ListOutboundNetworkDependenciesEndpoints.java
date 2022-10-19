import com.azure.core.util.Context;

/** Samples for LoadTests ListOutboundNetworkDependenciesEndpoints. */
public final class Main {
    /*
     * x-ms-original-file: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/stable/2022-12-01/examples/LoadTests_ListOutboundNetworkDependenciesEndpoints.json
     */
    /**
     * Sample code: ListOutboundNetworkDependencies.
     *
     * @param manager Entry point to LoadTestManager.
     */
    public static void listOutboundNetworkDependencies(
        com.azure.resourcemanager.loadtestservice.LoadTestManager manager) {
        manager
            .loadTests()
            .listOutboundNetworkDependenciesEndpoints(
                "default-azureloadtest-japaneast", "sampleloadtest", Context.NONE);
    }
}
