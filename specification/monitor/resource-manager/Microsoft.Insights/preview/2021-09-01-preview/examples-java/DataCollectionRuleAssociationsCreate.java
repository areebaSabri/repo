import com.azure.core.util.Context;
import com.azure.resourcemanager.monitor.fluent.models.DataCollectionRuleAssociationProxyOnlyResourceInner;

/** Samples for DataCollectionRuleAssociations Create. */
public final class Main {
    /*
     * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-09-01-preview/examples/DataCollectionRuleAssociationsCreate.json
     */
    /**
     * Sample code: Create or update association.
     *
     * @param azure The entry point for accessing resource management APIs in Azure.
     */
    public static void createOrUpdateAssociation(com.azure.resourcemanager.AzureResourceManager azure) {
        azure
            .diagnosticSettings()
            .manager()
            .serviceClient()
            .getDataCollectionRuleAssociations()
            .createWithResponse(
                "subscriptions/703362b3-f278-4e4b-9179-c76eaf41ffc2/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVm",
                "myAssociation",
                new DataCollectionRuleAssociationProxyOnlyResourceInner(),
                Context.NONE);
    }
}
