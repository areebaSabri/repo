import com.azure.resourcemanager.security.models.InformationProtectionKeyword;
import com.azure.resourcemanager.security.models.InformationProtectionPolicyName;
import com.azure.resourcemanager.security.models.InformationType;
import com.azure.resourcemanager.security.models.SensitivityLabel;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/** Samples for InformationProtectionPolicies CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2017-08-01-preview/examples/InformationProtectionPolicies/CreateOrUpdateInformationProtectionPolicy_example.json
     */
    /**
     * Sample code: Create or update an information protection policy for a management group.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void createOrUpdateAnInformationProtectionPolicyForAManagementGroup(
        com.azure.resourcemanager.security.SecurityManager manager) {
        manager
            .informationProtectionPolicies()
            .define(InformationProtectionPolicyName.CUSTOM)
            .withExistingScope("providers/Microsoft.Management/managementGroups/148059f7-faf3-49a6-ba35-85122112291e")
            .withLabels(
                mapOf(
                    "1345da73-bc5a-4a8f-b7dd-3820eb713da8",
                    new SensitivityLabel().withDisplayName("Public").withOrder(100).withEnabled(true),
                    "575739d2-3d53-4df0-9042-4c7772d5c7b1",
                    new SensitivityLabel().withDisplayName("Confidential").withOrder(300).withEnabled(true),
                    "7aa516c7-5a53-4857-bc6e-6808c6acd542",
                    new SensitivityLabel().withDisplayName("General").withOrder(200).withEnabled(true)))
            .withInformationTypes(
                mapOf(
                    "3bf35491-99b8-41f2-86d5-c1200a7df658",
                    new InformationType()
                        .withDisplayName("Custom")
                        .withOrder(1400)
                        .withRecommendedLabelId(UUID.fromString("7aa516c7-5a53-4857-bc6e-6808c6acd542"))
                        .withEnabled(true)
                        .withCustom(true)
                        .withKeywords(
                            Arrays
                                .asList(
                                    new InformationProtectionKeyword()
                                        .withPattern("%custom%")
                                        .withCustom(true)
                                        .withCanBeNumeric(true))),
                    "7fb9419d-2473-4ad8-8e11-b25cc8cf6a07",
                    new InformationType()
                        .withDisplayName("Networking")
                        .withOrder(100)
                        .withRecommendedLabelId(UUID.fromString("575739d2-3d53-4df0-9042-4c7772d5c7b1"))
                        .withEnabled(true)
                        .withCustom(false)
                        .withKeywords(
                            Arrays
                                .asList(
                                    new InformationProtectionKeyword()
                                        .withPattern("%networking%")
                                        .withCustom(true)
                                        .withCanBeNumeric(false)))))
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
