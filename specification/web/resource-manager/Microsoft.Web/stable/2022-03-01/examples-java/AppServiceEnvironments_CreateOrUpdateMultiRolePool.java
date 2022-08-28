import com.azure.core.util.Context;
import com.azure.resourcemanager.appservice.fluent.models.WorkerPoolResourceInner;

/** Samples for AppServiceEnvironments CreateOrUpdateMultiRolePool. */
public final class Main {
    /*
     * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/AppServiceEnvironments_CreateOrUpdateMultiRolePool.json
     */
    /**
     * Sample code: Create or update a multi-role pool.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createOrUpdateAMultiRolePool(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .webApps()
            .manager()
            .serviceClient()
            .getAppServiceEnvironments()
            .createOrUpdateMultiRolePool(
                "test-rg",
                "test-ase",
                new WorkerPoolResourceInner().withWorkerSize("Medium").withWorkerCount(3),
                Context.NONE);
    }
}
