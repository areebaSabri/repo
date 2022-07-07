import com.azure.core.util.Context;

/** Samples for TopicEventSubscriptions Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/TopicEventSubscriptions_Get.json
     */
    /**
     * Sample code: TopicEventSubscriptions_Get.
     *
     * @param manager Entry point to EventGridManager.
     */
    public static void topicEventSubscriptionsGet(com.azure.resourcemanager.eventgrid.EventGridManager manager) {
        manager
            .topicEventSubscriptions()
            .getWithResponse("examplerg", "exampleTopic1", "examplesubscription1", Context.NONE);
    }
}
