import com.azure.core.util.Context;

/** Samples for IpGroups Delete. */
public final class Main {
    /*
     * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/IpGroupsDelete.json
     */
    /**
     * Sample code: Delete_IpGroups.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void deleteIpGroups(com.azure.resourcemanager.AzureResourceManager azure) {
        azure.networks().manager().serviceClient().getIpGroups().delete("myResourceGroup", "ipGroups1", Context.NONE);
    }
}
