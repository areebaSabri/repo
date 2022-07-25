import com.azure.core.util.Context;

/** Samples for Sims Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-04-01-preview/examples/SimGet.json
     */
    /**
     * Sample code: Get SIM.
     *
     * @param manager Entry point to MobileNetworkManager.
     */
    public static void getSIM(com.azure.resourcemanager.mobilenetwork.MobileNetworkManager manager) {
        manager.sims().getWithResponse("testResourceGroupName", "testSimGroup", "testSimName", Context.NONE);
    }
}
