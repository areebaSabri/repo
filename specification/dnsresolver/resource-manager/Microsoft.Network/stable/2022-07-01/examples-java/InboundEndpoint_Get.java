import com.azure.core.util.Context;

/** Samples for InboundEndpoints Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/stable/2022-07-01/examples/InboundEndpoint_Get.json
     */
    /**
     * Sample code: Retrieve inbound endpoint for DNS resolver.
     *
     * @param manager Entry point to DnsResolverManager.
     */
    public static void retrieveInboundEndpointForDNSResolver(
        com.azure.resourcemanager.dnsresolver.DnsResolverManager manager) {
        manager
            .inboundEndpoints()
            .getWithResponse("sampleResourceGroup", "sampleDnsResolver", "sampleInboundEndpoint", Context.NONE);
    }
}
