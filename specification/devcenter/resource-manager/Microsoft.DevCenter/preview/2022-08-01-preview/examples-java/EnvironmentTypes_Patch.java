import com.azure.core.util.Context;
import com.azure.resourcemanager.devcenter.models.EnvironmentType;
import java.util.HashMap;
import java.util.Map;

/** Samples for EnvironmentTypes Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-08-01-preview/examples/EnvironmentTypes_Patch.json
     */
    /**
     * Sample code: EnvironmentTypes_Update.
     *
     * @param manager Entry point to DevCenterManager.
     */
    public static void environmentTypesUpdate(com.azure.resourcemanager.devcenter.DevCenterManager manager) {
        EnvironmentType resource =
            manager
                .environmentTypes()
                .getWithResponse("rg1", "Contoso", "{environmentTypeName}", Context.NONE)
                .getValue();
        resource.update().withTags(mapOf("Owner", "superuser")).apply();
    }

    @SuppressWarnings("unchecked")
    private static <T> Map<String, T> mapOf(Object... inputs) {
        Map<String, T> map = new HashMap<>();
        for (int i = 0; i < inputs.length; i += 2) {
            String key = (String) inputs[i];
            T value = (T) inputs[i + 1];
            map.put(key, value);
        }
        return map;
    }
}
