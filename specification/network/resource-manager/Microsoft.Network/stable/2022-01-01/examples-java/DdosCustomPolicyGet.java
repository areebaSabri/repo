import com.azure.core.util.Context;

/** Samples for DdosCustomPolicies GetByResourceGroup. */
public final class Main {
    /*
     * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/DdosCustomPolicyGet.json
     */
    /**
     * Sample code: Get DDoS custom policy.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void getDDoSCustomPolicy(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .networks()
            .manager()
            .serviceClient()
            .getDdosCustomPolicies()
            .getByResourceGroupWithResponse("rg1", "test-ddos-custom-policy", Context.NONE);
    }
}
