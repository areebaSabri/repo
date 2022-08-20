import com.azure.core.util.Context;

/** Samples for OperationStatuses Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-08-01-preview/examples/OperationStatus_Get.json
     */
    /**
     * Sample code: Get OperationStatus.
     *
     * @param manager Entry point to DevCenterManager.
     */
    public static void getOperationStatus(com.azure.resourcemanager.devcenter.DevCenterManager manager) {
        manager.operationStatuses().getWithResponse("{location}", "{operationId}", Context.NONE);
    }
}
