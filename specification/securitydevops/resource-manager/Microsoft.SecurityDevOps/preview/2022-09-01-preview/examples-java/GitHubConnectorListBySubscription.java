import com.azure.core.util.Context;

/** Samples for GitHubConnector List. */
public final class Main {
    /*
     * x-ms-original-file: specification/securitydevops/resource-manager/Microsoft.SecurityDevOps/preview/2022-09-01-preview/examples/GitHubConnectorListBySubscription.json
     */
    /**
     * Sample code: GitHubConnector_ListBySubscription.
     *
     * @param manager Entry point to SecurityDevOpsManager.
     */
    public static void gitHubConnectorListBySubscription(
        com.azure.resourcemanager.securitydevops.SecurityDevOpsManager manager) {
        manager.gitHubConnectors().list(Context.NONE);
    }
}
