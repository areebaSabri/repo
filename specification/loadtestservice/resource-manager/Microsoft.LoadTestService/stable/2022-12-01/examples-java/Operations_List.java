import com.azure.core.util.Context;

/** Samples for Operations List. */
public final class Main {
    /*
     * x-ms-original-file: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/stable/2022-12-01/examples/Operations_List.json
     */
    /**
     * Sample code: Operations_List.
     *
     * @param manager Entry point to LoadTestManager.
     */
    public static void operationsList(com.azure.resourcemanager.loadtestservice.LoadTestManager manager) {
        manager.operations().list(Context.NONE);
    }
}
