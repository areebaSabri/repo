import com.azure.core.util.Context;
import com.azure.resourcemanager.cosmos.fluent.models.PrivateEndpointConnectionInner;
import com.azure.resourcemanager.cosmos.models.PrivateLinkServiceConnectionStateProperty;

/** Samples for PrivateEndpointConnections CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2022-08-15/examples/CosmosDBPrivateEndpointConnectionUpdate.json
     */
    /**
     * Sample code: Approve or reject a private endpoint connection with a given name.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void approveOrRejectAPrivateEndpointConnectionWithAGivenName(
        com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .cosmosDBAccounts()
            .manager()
            .serviceClient()
            .getPrivateEndpointConnections()
            .createOrUpdate(
                "rg1",
                "ddb1",
                "privateEndpointConnectionName",
                new PrivateEndpointConnectionInner()
                    .withPrivateLinkServiceConnectionState(
                        new PrivateLinkServiceConnectionStateProperty()
                            .withStatus("Approved")
                            .withDescription("Approved by johndoe@contoso.com")),
                Context.NONE);
    }
}
