import com.azure.core.util.Context;

/** Samples for DevBoxDefinitions ListByDevCenter. */
public final class Main {
    /*
     * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-09-01-preview/examples/DevBoxDefinitions_ListByDevCenter.json
     */
    /**
     * Sample code: DevBoxDefinitions_ListByDevCenter.
     *
     * @param manager Entry point to DevCenterManager.
     */
    public static void devBoxDefinitionsListByDevCenter(com.azure.resourcemanager.devcenter.DevCenterManager manager) {
        manager.devBoxDefinitions().listByDevCenter("rg1", "Contoso", null, Context.NONE);
    }
}
