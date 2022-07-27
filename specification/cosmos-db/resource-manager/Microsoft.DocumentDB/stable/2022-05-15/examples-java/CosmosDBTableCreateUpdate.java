import com.azure.core.util.Context;
import com.azure.resourcemanager.cosmos.models.CreateUpdateOptions;
import com.azure.resourcemanager.cosmos.models.TableCreateUpdateParameters;
import com.azure.resourcemanager.cosmos.models.TableResource;
import java.util.HashMap;
import java.util.Map;

/** Samples for TableResources CreateUpdateTable. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-05-15/examples/CosmosDBTableCreateUpdate.json
     */
    /**
     * Sample code: CosmosDBTableReplace.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBTableReplace(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getTableResources()
            .createUpdateTable(
                "rg1",
                "ddb1",
                "tableName",
                new TableCreateUpdateParameters()
                    .withLocation("West US")
                    .withTags(mapOf())
                    .withResource(new TableResource().withId("tableName"))
                    .withOptions(new CreateUpdateOptions()),
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
