import com.azure.core.util.Context;

/** Samples for SentinelOnboardingStates Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/onboardingStates/GetSentinelOnboardingState.json
     */
    /**
     * Sample code: Get Sentinel onboarding state.
     *
     * @param manager Entry point to SecurityInsightsManager.
     */
    public static void getSentinelOnboardingState(
        com.azure.resourcemanager.securityinsights.SecurityInsightsManager manager) {
        manager.sentinelOnboardingStates().getWithResponse("myRg", "myWorkspace", "default", Context.NONE);
    }
}
