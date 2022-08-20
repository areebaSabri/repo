import com.azure.core.util.Context;

/** Samples for DevBoxDefinitions ListByProject. */
public final class Main {
    /*
     * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-08-01-preview/examples/DevBoxDefinitions_ListByProject.json
     */
    /**
     * Sample code: DevBoxDefinitions_ListByProject.
     *
     * @param manager Entry point to DevCenterManager.
     */
    public static void devBoxDefinitionsListByProject(com.azure.resourcemanager.devcenter.DevCenterManager manager) {
        manager.devBoxDefinitions().listByProject("rg1", "ContosoProject", null, Context.NONE);
    }
}
