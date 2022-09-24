import com.azure.core.util.Context;

/** Samples for AllowedConnections ListByHomeRegion. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/AllowedConnections/GetAllowedConnectionsSubscriptionLocation_example.json
     */
    /**
     * Sample code: Get allowed connections on a subscription from security data location.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void getAllowedConnectionsOnASubscriptionFromSecurityDataLocation(
        com.azure.resourcemanager.security.SecurityManager manager) {
        manager.allowedConnections().listByHomeRegion("centralus", Context.NONE);
    }
}
