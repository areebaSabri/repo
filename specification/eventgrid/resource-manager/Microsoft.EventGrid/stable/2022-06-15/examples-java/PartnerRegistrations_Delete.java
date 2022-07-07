import com.azure.core.util.Context;

/** Samples for PartnerRegistrations Delete. */
public final class Main {
    /*
     * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/PartnerRegistrations_Delete.json
     */
    /**
     * Sample code: PartnerRegistrations_Delete.
     *
     * @param manager Entry point to EventGridManager.
     */
    public static void partnerRegistrationsDelete(com.azure.resourcemanager.eventgrid.EventGridManager manager) {
        manager.partnerRegistrations().delete("examplerg", "examplePartnerRegistrationName1", Context.NONE);
    }
}
