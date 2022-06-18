import com.azure.core.util.Context;
import com.azure.resourcemanager.applicationinsights.models.Workbook;

/** Samples for Workbooks Update. */
public final class Main {
    /*
     * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2022-04-01/examples/WorkbookUpdate.json
     */
    /**
     * Sample code: WorkbookUpdate.
     *
     * @param manager Entry point to ApplicationInsightsManager.
     */
    public static void workbookUpdate(
        com.azure.resourcemanager.applicationinsights.ApplicationInsightsManager manager) {
        Workbook resource =
            manager
                .workbooks()
                .getByResourceGroupWithResponse(
                    "my-resource-group", "deadb33f-5e0d-4064-8ebb-1a4ed0313eb2", null, Context.NONE)
                .getValue();
        resource
            .update()
            .withSourceId(
                "/subscriptions/6b643656-33eb-422f-aee8-3ac145d124af/resourceGroups/my-resource-group/providers/Microsoft.Web/sites/MyApp")
            .apply();
    }
}
