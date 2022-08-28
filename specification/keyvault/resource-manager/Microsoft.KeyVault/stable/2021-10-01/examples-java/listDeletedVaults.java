import com.azure.core.util.Context;

/** Samples for Vaults ListDeleted. */
public final class Main {
    /*
     * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/stable/2021-10-01/examples/listDeletedVaults.json
     */
    /**
     * Sample code: List deleted vaults in the specified subscription.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void listDeletedVaultsInTheSpecifiedSubscription(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure.vaults().manager().serviceClient().getVaults().listDeleted(Context.NONE);
    }
}
