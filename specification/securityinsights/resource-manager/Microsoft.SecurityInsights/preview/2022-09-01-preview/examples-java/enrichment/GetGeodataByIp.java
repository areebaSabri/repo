import com.azure.core.util.Context;

/** Samples for IpGeodata Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/enrichment/GetGeodataByIp.json
     */
    /**
     * Sample code: Get geodata for a single IP address.
     *
     * @param manager Entry point to SecurityInsightsManager.
     */
    public static void getGeodataForASingleIPAddress(
        com.azure.resourcemanager.securityinsights.SecurityInsightsManager manager) {
        manager.ipGeodatas().getWithResponse("myRg", "1.2.3.4", Context.NONE);
    }
}
