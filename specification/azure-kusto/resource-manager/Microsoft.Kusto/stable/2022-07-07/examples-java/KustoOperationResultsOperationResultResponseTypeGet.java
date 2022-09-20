import com.azure.core.util.Context;

/** Samples for OperationsResultsLocation Get. */
public final class Main {
    /*
     * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-07-07/examples/KustoOperationResultsOperationResultResponseTypeGet.json
     */
    /**
     * Sample code: KustoOperationsResultsLocationGet.
     *
     * @param manager Entry point to KustoManager.
     */
    public static void kustoOperationsResultsLocationGet(com.azure.resourcemanager.kusto.KustoManager manager) {
        manager
            .operationsResultsLocations()
            .getWithResponse("westus", "30972f1b-b61d-4fd8-bd34-3dcfa24670f3", Context.NONE);
    }
}
