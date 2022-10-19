import com.azure.core.util.Context;

/** Samples for LoadTests GetByResourceGroup. */
public final class Main {
    /*
     * x-ms-original-file: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/stable/2022-12-01/examples/LoadTests_Get.json
     */
    /**
     * Sample code: LoadTests_Get.
     *
     * @param manager Entry point to LoadTestManager.
     */
    public static void loadTestsGet(com.azure.resourcemanager.loadtestservice.LoadTestManager manager) {
        manager.loadTests().getByResourceGroupWithResponse("dummyrg", "myLoadTest", Context.NONE);
    }
}
