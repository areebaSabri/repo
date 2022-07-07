import com.azure.core.util.Context;

/** Samples for SystemTopicEventSubscriptions ListBySystemTopic. */
public final class Main {
    /*
     * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/SystemTopicEventSubscriptions_ListBySystemTopic.json
     */
    /**
     * Sample code: SystemTopicEventSubscriptions_ListBySystemTopic.
     *
     * @param manager Entry point to EventGridManager.
     */
    public static void systemTopicEventSubscriptionsListBySystemTopic(
        com.azure.resourcemanager.eventgrid.EventGridManager manager) {
        manager
            .systemTopicEventSubscriptions()
            .listBySystemTopic("examplerg", "exampleSystemTopic1", null, null, Context.NONE);
    }
}
