import com.azure.core.util.Context;

/** Samples for IngestionSettings List. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2021-01-15-preview/examples/IngestionSettings/GetIngestionSettings_example.json
     */
    /**
     * Sample code: Get ingestion settings on subscription.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void getIngestionSettingsOnSubscription(com.azure.resourcemanager.security.SecurityManager manager) {
        manager.ingestionSettings().list(Context.NONE);
    }
}
