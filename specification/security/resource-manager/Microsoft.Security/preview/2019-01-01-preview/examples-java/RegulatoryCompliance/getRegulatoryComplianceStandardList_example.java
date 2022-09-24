import com.azure.core.util.Context;

/** Samples for RegulatoryComplianceStandards List. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2019-01-01-preview/examples/RegulatoryCompliance/getRegulatoryComplianceStandardList_example.json
     */
    /**
     * Sample code: Get all supported regulatory compliance standards details and state.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void getAllSupportedRegulatoryComplianceStandardsDetailsAndState(
        com.azure.resourcemanager.security.SecurityManager manager) {
        manager.regulatoryComplianceStandards().list(null, Context.NONE);
    }
}
