import com.azure.core.util.Context;

/** Samples for Channels Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/Channels_Get.json
     */
    /**
     * Sample code: Channels_Get.
     *
     * @param manager Entry point to EventGridManager.
     */
    public static void channelsGet(com.azure.resourcemanager.eventgrid.EventGridManager manager) {
        manager
            .channels()
            .getWithResponse("examplerg", "examplePartnerNamespaceName1", "exampleChannelName1", Context.NONE);
    }
}
