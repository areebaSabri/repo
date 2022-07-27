import com.azure.core.util.Context;

/** Samples for InstancePools ListByResourceGroup. */
public final class Main {
    /*
     * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2018-06-01-preview/examples/ListInstancePoolsByResourceGroup.json
     */
    /**
     * Sample code: List instance pools by resource group.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void listInstancePoolsByResourceGroup(com.azure.resourcemanager.AzureResourceManager azure) {
        azure.sqlServers().manager().serviceClient().getInstancePools().listByResourceGroup("group1", Context.NONE);
    }
}
