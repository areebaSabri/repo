import com.azure.core.util.Context;

/** Samples for Locations Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBLocationGet.json
     */
    /**
     * Sample code: CosmosDBLocationGet.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void cosmosDBLocationGet(com.azure.resourcemanager.AzureResourceManager azure) {
        azure.cosmosDBAccounts().manager().serviceClient().getLocations().getWithResponse("westus", Context.NONE);
    }
}
