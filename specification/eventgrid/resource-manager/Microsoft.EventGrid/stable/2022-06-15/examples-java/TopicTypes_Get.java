import com.azure.core.util.Context;

/** Samples for TopicTypes Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/TopicTypes_Get.json
     */
    /**
     * Sample code: TopicTypes_Get.
     *
     * @param manager Entry point to EventGridManager.
     */
    public static void topicTypesGet(com.azure.resourcemanager.eventgrid.EventGridManager manager) {
        manager.topicTypes().getWithResponse("Microsoft.Storage.StorageAccounts", Context.NONE);
    }
}
