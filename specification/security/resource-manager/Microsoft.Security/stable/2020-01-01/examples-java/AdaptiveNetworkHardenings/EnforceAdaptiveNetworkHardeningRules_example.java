import com.azure.core.util.Context;
import com.azure.resourcemanager.security.models.AdaptiveNetworkHardeningEnforceRequest;
import com.azure.resourcemanager.security.models.Direction;
import com.azure.resourcemanager.security.models.Rule;
import com.azure.resourcemanager.security.models.TransportProtocol;
import java.util.Arrays;

/** Samples for AdaptiveNetworkHardenings Enforce. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/AdaptiveNetworkHardenings/EnforceAdaptiveNetworkHardeningRules_example.json
     */
    /**
     * Sample code: Enforces the given rules on the NSG(s) listed in the request.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void enforcesTheGivenRulesOnTheNSGSListedInTheRequest(
        com.azure.resourcemanager.security.SecurityManager manager) {
        manager
            .adaptiveNetworkHardenings()
            .enforce(
                "rg1",
                "Microsoft.Compute",
                "virtualMachines",
                "vm1",
                "default",
                new AdaptiveNetworkHardeningEnforceRequest()
                    .withRules(
                        Arrays
                            .asList(
                                new Rule()
                                    .withName("rule1")
                                    .withDirection(Direction.INBOUND)
                                    .withDestinationPort(3389)
                                    .withProtocols(Arrays.asList(TransportProtocol.TCP))
                                    .withIpAddresses(Arrays.asList("100.10.1.1", "200.20.2.2", "81.199.3.0/24")),
                                new Rule()
                                    .withName("rule2")
                                    .withDirection(Direction.INBOUND)
                                    .withDestinationPort(22)
                                    .withProtocols(Arrays.asList(TransportProtocol.TCP))
                                    .withIpAddresses(Arrays.asList())))
                    .withNetworkSecurityGroups(
                        Arrays
                            .asList(
                                "/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/rg1/providers/Microsoft.Network/networkSecurityGroups/nsg1",
                                "/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/rg2/providers/Microsoft.Network/networkSecurityGroups/nsg2")),
                Context.NONE);
    }
}
