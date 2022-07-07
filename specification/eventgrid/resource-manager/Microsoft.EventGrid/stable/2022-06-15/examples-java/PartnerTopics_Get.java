import com.azure.core.util.Context;

/** Samples for PartnerTopics GetByResourceGroup. */
public final class Main {
    /*
     * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/PartnerTopics_Get.json
     */
    /**
     * Sample code: PartnerTopics_Get.
     *
     * @param manager Entry point to EventGridManager.
     */
    public static void partnerTopicsGet(com.azure.resourcemanager.eventgrid.EventGridManager manager) {
        manager.partnerTopics().getByResourceGroupWithResponse("examplerg", "examplePartnerTopicName1", Context.NONE);
    }
}
