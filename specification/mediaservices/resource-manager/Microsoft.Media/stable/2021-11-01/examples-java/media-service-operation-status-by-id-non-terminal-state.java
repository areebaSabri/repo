import com.azure.core.util.Context;

/** Samples for MediaServiceOperationStatuses Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2021-11-01/examples/media-service-operation-status-by-id-non-terminal-state.json
     */
    /**
     * Sample code: Get status of asynchronous operation when it is ongoing.
     *
     * @param manager Entry point to MediaServicesManager.
     */
    public static void getStatusOfAsynchronousOperationWhenItIsOngoing(
        com.azure.resourcemanager.mediaservices.MediaServicesManager manager) {
        manager
            .mediaServiceOperationStatuses()
            .getWithResponse("westus", "D612C429-2526-49D5-961B-885AE11406FD", Context.NONE);
    }
}
