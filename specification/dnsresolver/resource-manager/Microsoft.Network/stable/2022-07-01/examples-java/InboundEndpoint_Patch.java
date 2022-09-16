import com.azure.core.util.Context;
import com.azure.resourcemanager.dnsresolver.models.InboundEndpoint;
import java.util.HashMap;
import java.util.Map;

/** Samples for InboundEndpoints Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/stable/2022-07-01/examples/InboundEndpoint_Patch.json
     */
    /**
     * Sample code: Update inbound endpoint for DNS resolver.
     *
     * @param manager Entry point to DnsResolverManager.
     */
    public static void updateInboundEndpointForDNSResolver(
        com.azure.resourcemanager.dnsresolver.DnsResolverManager manager) {
        InboundEndpoint resource =
            manager
                .inboundEndpoints()
                .getWithResponse("sampleResourceGroup", "sampleDnsResolver", "sampleInboundEndpoint", Context.NONE)
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
