package armpolicyinsights_test

import (
	"context"
	"log"

	"time"

	"github.com/Azure/azure-sdk-for-go/sdk/azcore/to"
	"github.com/Azure/azure-sdk-for-go/sdk/azidentity"
	"github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/policyinsights/armpolicyinsights"
)

// Generated from example definition: https://github.com/Azure/azure-rest-api-specs/tree/main/specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2022-09-01/examples/Attestations_CreateSubscriptionScope_AllProperties.json
func ExampleAttestationsClient_BeginCreateOrUpdateAtSubscription_createAttestationAtSubscriptionScopeWithAllProperties() {
	cred, err := azidentity.NewDefaultAzureCredential(nil)
	if err != nil {
		log.Fatalf("failed to obtain a credential: %v", err)
	}
	ctx := context.Background()
	client, err := armpolicyinsights.NewAttestationsClient("35ee058e-5fa0-414c-8145-3ebb8d09b6e2", cred, nil)
	if err != nil {
		log.Fatalf("failed to create client: %v", err)
	}
	poller, err := client.BeginCreateOrUpdateAtSubscription(ctx, "790996e6-9871-4b1f-9cd9-ec42cd6ced1e", armpolicyinsights.Attestation{
		Properties: &armpolicyinsights.AttestationProperties{
			AssessmentDate:  to.Ptr(func() time.Time { t, _ := time.Parse(time.RFC3339Nano, "2021-06-10T00:00:00Z"); return t }()),
			Comments:        to.Ptr("This subscription has passed a security audit."),
			ComplianceState: to.Ptr(armpolicyinsights.ComplianceStateCompliant),
			Evidence: []*armpolicyinsights.AttestationEvidence{
				{
					Description: to.Ptr("The results of the security audit."),
					SourceURI:   to.Ptr("https://gist.github.com/contoso/9573e238762c60166c090ae16b814011"),
				}},
			ExpiresOn: to.Ptr(func() time.Time { t, _ := time.Parse(time.RFC3339Nano, "2021-06-15T00:00:00Z"); return t }()),
			Metadata: map[string]interface{}{
				"departmentId": "NYC-MARKETING-1",
			},
			Owner:                       to.Ptr("55a32e28-3aa5-4eea-9b5a-4cd85153b966"),
			PolicyAssignmentID:          to.Ptr("/subscriptions/35ee058e-5fa0-414c-8145-3ebb8d09b6e2/providers/microsoft.authorization/policyassignments/b101830944f246d8a14088c5"),
			PolicyDefinitionReferenceID: to.Ptr("0b158b46-ff42-4799-8e39-08a5c23b4551"),
		},
	}, nil)
	if err != nil {
		log.Fatalf("failed to finish the request: %v", err)
	}
	res, err := poller.PollUntilDone(ctx, nil)
	if err != nil {
		log.Fatalf("failed to pull the result: %v", err)
	}
	// TODO: use response item
	_ = res
}
