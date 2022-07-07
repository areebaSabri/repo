import com.azure.core.util.Context;

/** Samples for EventSubscriptions Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_GetForCustomTopic_ServiceBusTopicDestination.json
     */
    /**
     * Sample code: EventSubscriptions_GetForCustomTopic_ServiceBusTopicDestination.
     *
     * @param manager Entry point to EventGridManager.
     */
    public static void eventSubscriptionsGetForCustomTopicServiceBusTopicDestination(
        com.azure.resourcemanager.eventgrid.EventGridManager manager) {
        manager
            .eventSubscriptions()
            .getWithResponse(
                "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic2",
                "examplesubscription1",
                Context.NONE);
    }
}
