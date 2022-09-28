import com.azure.core.util.Context;
import com.azure.resourcemanager.securityinsights.models.ThreatIntelligenceIndicatorModel;
import java.util.Arrays;

/** Samples for ThreatIntelligenceIndicator Create. */
public final class Main {
    /*
     * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/threatintelligence/UpdateThreatIntelligence.json
     */
    /**
     * Sample code: Update a threat Intelligence indicator.
     *
     * @param manager Entry point to SecurityInsightsManager.
     */
    public static void updateAThreatIntelligenceIndicator(
        com.azure.resourcemanager.securityinsights.SecurityInsightsManager manager) {
        manager
            .threatIntelligenceIndicators()
            .createWithResponse(
                "myRg",
                "myWorkspace",
                "d9cd6f0b-96b9-3984-17cd-a779d1e15a93",
                new ThreatIntelligenceIndicatorModel()
                    .withThreatIntelligenceTags(Arrays.asList("new schema"))
                    .withSource("Azure Sentinel")
                    .withDisplayName("new schema")
                    .withDescription("debugging indicators")
                    .withPattern("[url:value = 'https://www.contoso.com']")
                    .withPatternType("url")
                    .withKillChainPhases(Arrays.asList())
                    .withCreatedByRef("contoso@contoso.com")
                    .withExternalReferences(Arrays.asList())
                    .withGranularMarkings(Arrays.asList())
                    .withLabels(Arrays.asList())
                    .withRevoked(false)
                    .withConfidence(78)
                    .withThreatTypes(Arrays.asList("compromised"))
                    .withValidFrom("2020-04-15T17:44:00.114052Z")
                    .withValidUntil("")
                    .withModified(""),
                Context.NONE);
    }
}
