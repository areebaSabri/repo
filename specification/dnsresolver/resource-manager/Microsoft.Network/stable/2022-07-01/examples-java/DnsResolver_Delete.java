import com.azure.core.util.Context;

/** Samples for DnsResolvers Delete. */
public final class Main {
    /*
     * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/stable/2022-07-01/examples/DnsResolver_Delete.json
     */
    /**
     * Sample code: Delete DNS resolver.
     *
     * @param manager Entry point to DnsResolverManager.
     */
    public static void deleteDNSResolver(com.azure.resourcemanager.dnsresolver.DnsResolverManager manager) {
        manager.dnsResolvers().delete("sampleResourceGroup", "sampleDnsResolver", null, Context.NONE);
    }
}
