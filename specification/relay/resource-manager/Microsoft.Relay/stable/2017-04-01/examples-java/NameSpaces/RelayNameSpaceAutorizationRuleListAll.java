import com.azure.core.util.Context;

/** Samples for Namespaces ListAuthorizationRules. */
public final class Main {
    /*
     * x-ms-original-file: specification/relay/resource-manager/Microsoft.Relay/stable/2017-04-01/examples/NameSpaces/RelayNameSpaceAutorizationRuleListAll.json
     */
    /**
     * Sample code: RelayNameSpaceAutorizationRuleListAll.
     *
     * @param manager Entry point to RelayManager.
     */
    public static void relayNameSpaceAutorizationRuleListAll(com.azure.resourcemanager.relay.RelayManager manager) {
        manager.namespaces().listAuthorizationRules("resourcegroup", "example-RelayNamespace-01", Context.NONE);
    }
}
