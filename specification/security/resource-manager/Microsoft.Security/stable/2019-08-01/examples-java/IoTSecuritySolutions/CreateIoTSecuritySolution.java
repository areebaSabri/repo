import com.azure.resourcemanager.security.models.RecommendationConfigStatus;
import com.azure.resourcemanager.security.models.RecommendationConfigurationProperties;
import com.azure.resourcemanager.security.models.RecommendationType;
import com.azure.resourcemanager.security.models.SecuritySolutionStatus;
import com.azure.resourcemanager.security.models.UnmaskedIpLoggingStatus;
import com.azure.resourcemanager.security.models.UserDefinedResourcesProperties;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/** Samples for IotSecuritySolution CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2019-08-01/examples/IoTSecuritySolutions/CreateIoTSecuritySolution.json
     */
    /**
     * Sample code: Create or update a IoT security solution.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void createOrUpdateAIoTSecuritySolution(com.azure.resourcemanager.security.SecurityManager manager) {
        manager
            .iotSecuritySolutions()
            .define("default")
            .withExistingResourceGroup("MyGroup")
            .withRegion("East Us")
            .withTags(mapOf())
            .withWorkspace(
                "/subscriptions/c4930e90-cd72-4aa5-93e9-2d081d129569/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace1")
            .withDisplayName("Solution Default")
            .withStatus(SecuritySolutionStatus.ENABLED)
            .withExport(Arrays.asList())
            .withDisabledDataSources(Arrays.asList())
            .withIotHubs(
                Arrays
                    .asList(
                        "/subscriptions/075423e9-7d33-4166-8bdf-3920b04e3735/resourceGroups/myRg/providers/Microsoft.Devices/IotHubs/FirstIotHub"))
            .withUserDefinedResources(
                new UserDefinedResourcesProperties()
                    .withQuery("where type != \"microsoft.devices/iothubs\" | where name contains \"iot\"")
                    .withQuerySubscriptions(Arrays.asList("075423e9-7d33-4166-8bdf-3920b04e3735")))
            .withRecommendationsConfiguration(
                Arrays
                    .asList(
                        new RecommendationConfigurationProperties()
                            .withRecommendationType(RecommendationType.IO_T_OPEN_PORTS)
                            .withStatus(RecommendationConfigStatus.DISABLED),
                        new RecommendationConfigurationProperties()
                            .withRecommendationType(RecommendationType.IO_T_SHARED_CREDENTIALS)
                            .withStatus(RecommendationConfigStatus.DISABLED)))
            .withUnmaskedIpLoggingStatus(UnmaskedIpLoggingStatus.ENABLED)
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
