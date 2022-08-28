import com.azure.core.util.Context;
import com.azure.resourcemanager.keyvault.fluent.models.ManagedHsmInner;
import java.util.HashMap;
import java.util.Map;

/** Samples for ManagedHsms Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/stable/2021-10-01/examples/ManagedHsm_Update.json
     */
    /**
     * Sample code: Update an existing managed HSM Pool.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void updateAnExistingManagedHSMPool(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .vaults()
            .manager()
            .serviceClient()
            .getManagedHsms()
            .update(
                "hsm-group",
                "hsm1",
                new ManagedHsmInner().withTags(mapOf("Dept", "hsm", "Environment", "dogfood", "Slice", "A")),
                Context.NONE);
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
