/** Samples for BookmarkRelations CreateOrUpdate. */
public final class Main {
    /*
     * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/bookmarks/relations/CreateBookmarkRelation.json
     */
    /**
     * Sample code: Creates or updates a bookmark relation.
     *
     * @param manager Entry point to SecurityInsightsManager.
     */
    public static void createsOrUpdatesABookmarkRelation(
        com.azure.resourcemanager.securityinsights.SecurityInsightsManager manager) {
        manager
            .bookmarkRelations()
            .define("4bb36b7b-26ff-4d1c-9cbe-0d8ab3da0014")
            .withExistingBookmark("myRg", "myWorkspace", "2216d0e1-91e3-4902-89fd-d2df8c535096")
            .withRelatedResourceId(
                "/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/incidents/afbd324f-6c48-459c-8710-8d1e1cd03812")
            .create();
    }
}
