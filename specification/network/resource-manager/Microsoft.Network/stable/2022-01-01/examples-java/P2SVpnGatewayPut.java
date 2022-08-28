import com.azure.core.management.SubResource;
import com.azure.core.util.Context;
import com.azure.resourcemanager.network.fluent.models.P2SVpnGatewayInner;
import com.azure.resourcemanager.network.models.AddressSpace;
import com.azure.resourcemanager.network.models.P2SConnectionConfiguration;
import com.azure.resourcemanager.network.models.PropagatedRouteTable;
import com.azure.resourcemanager.network.models.RoutingConfiguration;
import com.azure.resourcemanager.network.models.VnetRoute;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/** Samples for P2SVpnGateways CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/P2SVpnGatewayPut.json
     */
    /**
     * Sample code: P2SVpnGatewayPut.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void p2SVpnGatewayPut(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .networks()
            .manager()
            .serviceClient()
            .getP2SVpnGateways()
            .createOrUpdate(
                "rg1",
                "p2sVpnGateway1",
                new P2SVpnGatewayInner()
                    .withLocation("West US")
                    .withTags(mapOf("key1", "value1"))
                    .withVirtualHub(
                        new SubResource()
                            .withId(
                                "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1"))
                    .withP2SConnectionConfigurations(
                        Arrays
                            .asList(
                                new P2SConnectionConfiguration()
                                    .withId(
                                        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/p2sVpnGateways/p2sVpnGateway1/p2sConnectionConfigurations/P2SConnectionConfig1")
                                    .withName("P2SConnectionConfig1")
                                    .withVpnClientAddressPool(
                                        new AddressSpace().withAddressPrefixes(Arrays.asList("101.3.0.0/16")))
                                    .withRoutingConfiguration(
                                        new RoutingConfiguration()
                                            .withAssociatedRouteTable(
                                                new SubResource()
                                                    .withId(
                                                        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable1"))
                                            .withPropagatedRouteTables(
                                                new PropagatedRouteTable()
                                                    .withLabels(Arrays.asList("label1", "label2"))
                                                    .withIds(
                                                        Arrays
                                                            .asList(
                                                                new SubResource()
                                                                    .withId(
                                                                        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable1"),
                                                                new SubResource()
                                                                    .withId(
                                                                        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable2"),
                                                                new SubResource()
                                                                    .withId(
                                                                        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable3"))))
                                            .withVnetRoutes(new VnetRoute().withStaticRoutes(Arrays.asList())))))
                    .withVpnGatewayScaleUnit(1)
                    .withVpnServerConfiguration(
                        new SubResource()
                            .withId(
                                "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/vpnServerConfigurations/vpnServerConfiguration1"))
                    .withCustomDnsServers(Arrays.asList("1.1.1.1", "2.2.2.2"))
                    .withIsRoutingPreferenceInternet(false),
                Context.NONE);
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
