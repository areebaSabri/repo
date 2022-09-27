import com.azure.core.util.Context;
import com.azure.resourcemanager.securityinsights.fluent.models.RelationInner;

/** Samples for IncidentRelations CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/incidents/relations/CreateIncidentRelation.json
     */
    /**
     * Sample code: Creates or updates an incident relation.
     *
     * @param manager Entry point to SecurityInsightsManager.
     */
    public static void createsOrUpdatesAnIncidentRelation(
        com.azure.resourcemanager.securityinsights.SecurityInsightsManager manager) {
        manager
            .incidentRelations()
            .createOrUpdateWithResponse(
                "myRg",
                "myWorkspace",
                "afbd324f-6c48-459c-8710-8d1e1cd03812",
                "4bb36b7b-26ff-4d1c-9cbe-0d8ab3da0014",
                new RelationInner()
                    .withRelatedResourceId(
                        "/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.OperationalIinsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/bookmarks/2216d0e1-91e3-4902-89fd-d2df8c535096"),
                Context.NONE);
    }
}
