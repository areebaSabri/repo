import com.azure.core.util.Context;
import com.azure.resourcemanager.dnsresolver.models.DnsForwardingRuleset;
import java.util.HashMap;
import java.util.Map;

/** Samples for DnsForwardingRulesets Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/stable/2022-07-01/examples/DnsForwardingRuleset_Patch.json
     */
    /**
     * Sample code: Update DNS forwarding ruleset.
     *
     * @param manager Entry point to DnsResolverManager.
     */
    public static void updateDNSForwardingRuleset(com.azure.resourcemanager.dnsresolver.DnsResolverManager manager) {
        DnsForwardingRuleset resource =
            manager
                .dnsForwardingRulesets()
                .getByResourceGroupWithResponse("sampleResourceGroup", "sampleDnsForwardingRuleset", Context.NONE)
                .getValue();
        resource.update().withTags(mapOf("key1", "value1")).apply();
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
