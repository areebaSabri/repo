import com.azure.core.util.Context;
import com.azure.resourcemanager.monitor.fluent.models.ActionGroupResourceInner;
import com.azure.resourcemanager.monitor.models.ArmRoleReceiver;
import com.azure.resourcemanager.monitor.models.AutomationRunbookReceiver;
import com.azure.resourcemanager.monitor.models.AzureAppPushReceiver;
import com.azure.resourcemanager.monitor.models.AzureFunctionReceiver;
import com.azure.resourcemanager.monitor.models.EmailReceiver;
import com.azure.resourcemanager.monitor.models.EventHubReceiver;
import com.azure.resourcemanager.monitor.models.ItsmReceiver;
import com.azure.resourcemanager.monitor.models.LogicAppReceiver;
import com.azure.resourcemanager.monitor.models.SmsReceiver;
import com.azure.resourcemanager.monitor.models.VoiceReceiver;
import com.azure.resourcemanager.monitor.models.WebhookReceiver;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/** Samples for ActionGroups CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2022-06-01/examples/createOrUpdateActionGroup.json
     */
    /**
     * Sample code: Create or update an action group.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createOrUpdateAnActionGroup(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .diagnosticSettings()
            .manager()
            .serviceClient()
            .getActionGroups()
            .createOrUpdateWithResponse(
                "Default-NotificationRules",
                "SampleActionGroup",
                new ActionGroupResourceInner()
                    .withLocation("Global")
                    .withTags(mapOf())
                    .withGroupShortName("sample")
                    .withEnabled(true)
                    .withEmailReceivers(
                        Arrays
                            .asList(
                                new EmailReceiver()
                                    .withName("John Doe's email")
                                    .withEmailAddress("johndoe@email.com")
                                    .withUseCommonAlertSchema(false),
                                new EmailReceiver()
                                    .withName("Jane Smith's email")
                                    .withEmailAddress("janesmith@email.com")
                                    .withUseCommonAlertSchema(true)))
                    .withSmsReceivers(
                        Arrays
                            .asList(
                                new SmsReceiver()
                                    .withName("John Doe's mobile")
                                    .withCountryCode("1")
                                    .withPhoneNumber("1234567890"),
                                new SmsReceiver()
                                    .withName("Jane Smith's mobile")
                                    .withCountryCode("1")
                                    .withPhoneNumber("0987654321")))
                    .withWebhookReceivers(
                        Arrays
                            .asList(
                                new WebhookReceiver()
                                    .withName("Sample webhook 1")
                                    .withServiceUri("http://www.example.com/webhook1")
                                    .withUseCommonAlertSchema(true),
                                new WebhookReceiver()
                                    .withName("Sample webhook 2")
                                    .withServiceUri("http://www.example.com/webhook2")
                                    .withUseCommonAlertSchema(true)
                                    .withUseAadAuth(true)
                                    .withObjectId("d3bb868c-fe44-452c-aa26-769a6538c808")
                                    .withIdentifierUri("http://someidentifier/d7811ba3-7996-4a93-99b6-6b2f3f355f8a")
                                    .withTenantId("68a4459a-ccb8-493c-b9da-dd30457d1b84")))
                    .withItsmReceivers(
                        Arrays
                            .asList(
                                new ItsmReceiver()
                                    .withName("Sample itsm")
                                    .withWorkspaceId(
                                        "5def922a-3ed4-49c1-b9fd-05ec533819a3|55dfd1f8-7e59-4f89-bf56-4c82f5ace23c")
                                    .withConnectionId("a3b9076c-ce8e-434e-85b4-aff10cb3c8f1")
                                    .withTicketConfiguration(
                                        "{\"PayloadRevision\":0,\"WorkItemType\":\"Incident\",\"UseTemplate\":false,\"WorkItemData\":\"{}\",\"CreateOneWIPerCI\":false}")
                                    .withRegion("westcentralus")))
                    .withAzureAppPushReceivers(
                        Arrays
                            .asList(
                                new AzureAppPushReceiver()
                                    .withName("Sample azureAppPush")
                                    .withEmailAddress("johndoe@email.com")))
                    .withAutomationRunbookReceivers(
                        Arrays
                            .asList(
                                new AutomationRunbookReceiver()
                                    .withAutomationAccountId(
                                        "/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/runbookTest/providers/Microsoft.Automation/automationAccounts/runbooktest")
                                    .withRunbookName("Sample runbook")
                                    .withWebhookResourceId(
                                        "/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/runbookTest/providers/Microsoft.Automation/automationAccounts/runbooktest/webhooks/Alert1510184037084")
                                    .withIsGlobalRunbook(false)
                                    .withName("testRunbook")
                                    .withServiceUri("<serviceUri>")
                                    .withUseCommonAlertSchema(true)))
                    .withVoiceReceivers(
                        Arrays
                            .asList(
                                new VoiceReceiver()
                                    .withName("Sample voice")
                                    .withCountryCode("1")
                                    .withPhoneNumber("1234567890")))
                    .withLogicAppReceivers(
                        Arrays
                            .asList(
                                new LogicAppReceiver()
                                    .withName("Sample logicApp")
                                    .withResourceId(
                                        "/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/LogicApp/providers/Microsoft.Logic/workflows/testLogicApp")
                                    .withCallbackUrl(
                                        "https://prod-27.northcentralus.logic.azure.com/workflows/68e572e818e5457ba898763b7db90877/triggers/manual/paths/invoke/azns/test?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Abpsb72UYJxPPvmDo937uzofupO5r_vIeWEx7KVHo7w")
                                    .withUseCommonAlertSchema(false)))
                    .withAzureFunctionReceivers(
                        Arrays
                            .asList(
                                new AzureFunctionReceiver()
                                    .withName("Sample azureFunction")
                                    .withFunctionAppResourceId(
                                        "/subscriptions/5def922a-3ed4-49c1-b9fd-05ec533819a3/resourceGroups/aznsTest/providers/Microsoft.Web/sites/testFunctionApp")
                                    .withFunctionName("HttpTriggerCSharp1")
                                    .withHttpTriggerUrl("http://test.me")
                                    .withUseCommonAlertSchema(true)))
                    .withArmRoleReceivers(
                        Arrays
                            .asList(
                                new ArmRoleReceiver()
                                    .withName("Sample armRole")
                                    .withRoleId("8e3af657-a8ff-443c-a75c-2fe8c4bcb635")
                                    .withUseCommonAlertSchema(true)))
                    .withEventHubReceivers(
                        Arrays
                            .asList(
                                new EventHubReceiver()
                                    .withName("Sample eventHub")
                                    .withEventHubNameSpace("testEventHubNameSpace")
                                    .withEventHubName("testEventHub")
                                    .withTenantId("68a4459a-ccb8-493c-b9da-dd30457d1b84")
                                    .withSubscriptionId("187f412d-1758-44d9-b052-169e2564721d"))),
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
