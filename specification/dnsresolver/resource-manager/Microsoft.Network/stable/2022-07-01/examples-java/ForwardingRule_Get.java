import com.azure.core.util.Context;

/** Samples for ForwardingRules Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ForwardingRule_Get.json
     */
    /**
     * Sample code: Retrieve forwarding rule in a DNS forwarding ruleset.
     *
     * @param manager Entry point to DnsResolverManager.
     */
    public static void retrieveForwardingRuleInADNSForwardingRuleset(
        com.azure.resourcemanager.dnsresolver.DnsResolverManager manager) {
        manager
            .forwardingRules()
            .getWithResponse("sampleResourceGroup", "sampleDnsForwardingRuleset", "sampleForwardingRule", Context.NONE);
    }
}
