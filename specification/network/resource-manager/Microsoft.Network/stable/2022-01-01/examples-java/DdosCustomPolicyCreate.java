import com.azure.core.util.Context;
import com.azure.resourcemanager.network.fluent.models.DdosCustomPolicyInner;
import com.azure.resourcemanager.network.models.DdosCustomPolicyProtocol;
import com.azure.resourcemanager.network.models.ProtocolCustomSettingsFormat;
import java.util.Arrays;

/** Samples for DdosCustomPolicies CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/DdosCustomPolicyCreate.json
     */
    /**
     * Sample code: Create DDoS custom policy.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createDDoSCustomPolicy(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .networks()
            .manager()
            .serviceClient()
            .getDdosCustomPolicies()
            .createOrUpdate(
                "rg1",
                "test-ddos-custom-policy",
                new DdosCustomPolicyInner()
                    .withLocation("centraluseuap")
                    .withProtocolCustomSettings(
                        Arrays.asList(new ProtocolCustomSettingsFormat().withProtocol(DdosCustomPolicyProtocol.TCP))),
                Context.NONE);
    }
}
