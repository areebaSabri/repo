import com.azure.core.util.Context;

/** Samples for FarmBeatsModels GetByResourceGroup. */
public final class Main {
    /*
     * x-ms-original-file: specification/agrifood/resource-manager/Microsoft.AgFoodPlatform/preview/2021-09-01-preview/examples/FarmBeatsModels_Get.json
     */
    /**
     * Sample code: FarmBeatsModels_Get.
     *
     * @param manager Entry point to AgriFoodManager.
     */
    public static void farmBeatsModelsGet(com.azure.resourcemanager.agrifood.AgriFoodManager manager) {
        manager
            .farmBeatsModels()
            .getByResourceGroupWithResponse("examples-rg", "examples-farmBeatsResourceName", Context.NONE);
    }
}
