import com.azure.resourcemanager.dashboard.models.ApiKey;
import com.azure.resourcemanager.dashboard.models.AzureMonitorWorkspaceIntegration;
import com.azure.resourcemanager.dashboard.models.DeterministicOutboundIp;
import com.azure.resourcemanager.dashboard.models.GrafanaIntegrations;
import com.azure.resourcemanager.dashboard.models.ManagedGrafanaProperties;
import com.azure.resourcemanager.dashboard.models.ManagedServiceIdentity;
import com.azure.resourcemanager.dashboard.models.ManagedServiceIdentityType;
import com.azure.resourcemanager.dashboard.models.PublicNetworkAccess;
import com.azure.resourcemanager.dashboard.models.ResourceSku;
import com.azure.resourcemanager.dashboard.models.ZoneRedundancy;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/** Samples for Grafana Create. */
public final class Main {
    /*
     * x-ms-original-file: specification/dashboard/resource-manager/Microsoft.Dashboard/stable/2022-08-01/examples/Grafana_Create.json
     */
    /**
     * Sample code: Grafana_Create.
     *
     * @param manager Entry point to DashboardManager.
     */
    public static void grafanaCreate(com.azure.resourcemanager.dashboard.DashboardManager manager) {
        manager
            .grafanas()
            .define("myWorkspace")
            .withRegion("West US")
            .withExistingResourceGroup("myResourceGroup")
            .withTags(mapOf("Environment", "Dev"))
            .withSku(new ResourceSku().withName("Standard"))
            .withProperties(
                new ManagedGrafanaProperties()
                    .withPublicNetworkAccess(PublicNetworkAccess.ENABLED)
                    .withZoneRedundancy(ZoneRedundancy.ENABLED)
                    .withApiKey(ApiKey.ENABLED)
                    .withDeterministicOutboundIp(DeterministicOutboundIp.ENABLED)
                    .withGrafanaIntegrations(
                        new GrafanaIntegrations()
                            .withAzureMonitorWorkspaceIntegrations(
                                Arrays
                                    .asList(
                                        new AzureMonitorWorkspaceIntegration()
                                            .withAzureMonitorWorkspaceResourceId(
                                                "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.monitor/accounts/myAzureMonitorWorkspace")))))
            .withIdentity(new ManagedServiceIdentity().withType(ManagedServiceIdentityType.SYSTEM_ASSIGNED))
            .create();
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
