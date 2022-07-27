import com.azure.core.util.Context;
import com.azure.resourcemanager.sql.fluent.models.InstancePoolInner;
import com.azure.resourcemanager.sql.models.InstancePoolLicenseType;
import com.azure.resourcemanager.sql.models.Sku;
import java.util.HashMap;
import java.util.Map;

/** Samples for InstancePools CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2018-06-01-preview/examples/CreateOrUpdateInstancePoolMin.json
     */
    /**
     * Sample code: Create an instance pool with min properties.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createAnInstancePoolWithMinProperties(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .sqlServers()
            .manager()
            .serviceClient()
            .getInstancePools()
            .createOrUpdate(
                "group1",
                "testIP",
                new InstancePoolInner()
                    .withSku(new Sku().withName("GP_Gen5").withTier("GeneralPurpose").withFamily("Gen5"))
                    .withSubnetId(
                        "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Network/virtualNetwork/myvnet/subnets/mysubnet1")
                    .withVCores(8)
                    .withLicenseType(InstancePoolLicenseType.LICENSE_INCLUDED),
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
