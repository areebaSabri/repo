package armalertsmanagement_test

import (
	"context"
	"log"

	"github.com/Azure/azure-sdk-for-go/sdk/azcore/to"
	"github.com/Azure/azure-sdk-for-go/sdk/azidentity"
	"github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/alertsmanagement/armalertsmanagement"
)

// Generated from example definition: https://github.com/Azure/azure-rest-api-specs/tree/main/specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/stable/2021-08-08/examples/AlertProcessingRules_Create_or_update_remove_all_action_groups_recurring_maintenance_window.json
func ExampleAlertProcessingRulesClient_CreateOrUpdate_createOrUpdateARuleThatRemovesAllActionGroupsFromAllAlertsOnAnyVmInTwoResourceGroupsDuringARecurringMaintenanceWindow22000400EverySatAndSunIndiaStandardTime() {
	cred, err := azidentity.NewDefaultAzureCredential(nil)
	if err != nil {
		log.Fatalf("failed to obtain a credential: %v", err)
	}
	ctx := context.Background()
	client, err := armalertsmanagement.NewAlertProcessingRulesClient("subId1", cred, nil)
	if err != nil {
		log.Fatalf("failed to create client: %v", err)
	}
	res, err := client.CreateOrUpdate(ctx, "alertscorrelationrg", "RemoveActionGroupsRecurringMaintenance", armalertsmanagement.AlertProcessingRule{
		Location: to.Ptr("Global"),
		Tags:     map[string]*string{},
		Properties: &armalertsmanagement.AlertProcessingRuleProperties{
			Description: to.Ptr("Remove all ActionGroups from all Vitual machine Alerts during the recurring maintenance"),
			Actions: []armalertsmanagement.ActionClassification{
				&armalertsmanagement.RemoveAllActionGroups{
					ActionType: to.Ptr(armalertsmanagement.ActionTypeRemoveAllActionGroups),
				}},
			Conditions: []*armalertsmanagement.Condition{
				{
					Field:    to.Ptr(armalertsmanagement.FieldTargetResourceType),
					Operator: to.Ptr(armalertsmanagement.OperatorEquals),
					Values: []*string{
						to.Ptr("microsoft.compute/virtualmachines")},
				}},
			Enabled: to.Ptr(true),
			Schedule: &armalertsmanagement.Schedule{
				Recurrences: []armalertsmanagement.RecurrenceClassification{
					&armalertsmanagement.WeeklyRecurrence{
						EndTime:        to.Ptr("04:00:00"),
						RecurrenceType: to.Ptr(armalertsmanagement.RecurrenceTypeWeekly),
						StartTime:      to.Ptr("22:00:00"),
						DaysOfWeek: []*armalertsmanagement.DaysOfWeek{
							to.Ptr(armalertsmanagement.DaysOfWeekSaturday),
							to.Ptr(armalertsmanagement.DaysOfWeekSunday)},
					}},
				TimeZone: to.Ptr("India Standard Time"),
			},
			Scopes: []*string{
				to.Ptr("/subscriptions/subId1/resourceGroups/RGId1"),
				to.Ptr("/subscriptions/subId1/resourceGroups/RGId2")},
		},
	}, nil)
	if err != nil {
		log.Fatalf("failed to finish the request: %v", err)
	}
	// TODO: use response item
	_ = res
}
