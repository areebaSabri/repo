import com.azure.core.management.serializer.SerializerFactory;
import com.azure.core.util.Context;
import com.azure.core.util.serializer.SerializerEncoding;
import com.azure.resourcemanager.security.fluent.models.AlertsSuppressionRuleInner;
import com.azure.resourcemanager.security.models.RuleState;
import com.azure.resourcemanager.security.models.ScopeElement;
import com.azure.resourcemanager.security.models.SuppressionAlertsScope;
import java.io.IOException;
import java.time.OffsetDateTime;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/** Samples for AlertsSuppressionRules Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2019-01-01-preview/examples/AlertsSuppressionRules/PutAlertsSuppressionRule_example.json
     */
    /**
     * Sample code: Update or create suppression rule for subscription.
     *
     * @param manager Entry point to SecurityManager.
     */
    public static void updateOrCreateSuppressionRuleForSubscription(
        com.azure.resourcemanager.security.SecurityManager manager) throws IOException {
        manager
            .alertsSuppressionRules()
            .updateWithResponse(
                "dismissIpAnomalyAlerts",
                new AlertsSuppressionRuleInner()
                    .withAlertType("IpAnomaly")
                    .withExpirationDateUtc(OffsetDateTime.parse("2019-12-01T19:50:47.083633Z"))
                    .withReason("FalsePositive")
                    .withState(RuleState.ENABLED)
                    .withComment("Test VM")
                    .withSuppressionAlertsScope(
                        new SuppressionAlertsScope()
                            .withAllOf(
                                Arrays
                                    .asList(
                                        new ScopeElement()
                                            .withField("entities.ip.address")
                                            .withAdditionalProperties(
                                                mapOf(
                                                    "in",
                                                    SerializerFactory
                                                        .createDefaultManagementSerializerAdapter()
                                                        .deserialize(
                                                            "[\"104.215.95.187\",\"52.164.206.56\"]",
                                                            Object.class,
                                                            SerializerEncoding.JSON))),
                                        new ScopeElement()
                                            .withField("entities.process.commandline")
                                            .withAdditionalProperties(mapOf("contains", "POWERSHELL.EXE"))))),
                Context.NONE);
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
