package armappservice_test

import (
	"context"
	"log"

	"github.com/Azure/azure-sdk-for-go/sdk/azcore/to"
	"github.com/Azure/azure-sdk-for-go/sdk/azidentity"
	"github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/appservice/armappservice/v2"
)

// Generated from example definition: https://github.com/Azure/azure-rest-api-specs/tree/main/specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/Workflows_Validate.json
func ExampleWorkflowsClient_Validate() {
	cred, err := azidentity.NewDefaultAzureCredential(nil)
	if err != nil {
		log.Fatalf("failed to obtain a credential: %v", err)
	}
	ctx := context.Background()
	client, err := armappservice.NewWorkflowsClient("34adfa4f-cedf-4dc0-ba29-b6d1a69ab345", cred, nil)
	if err != nil {
		log.Fatalf("failed to create client: %v", err)
	}
	_, err = client.Validate(ctx,
		"test-resource-group",
		"test-name",
		"test-workflow",
		armappservice.Workflow{
			Properties: &armappservice.WorkflowProperties{
				Definition: map[string]interface{}{
					"$schema":        "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
					"actions":        map[string]interface{}{},
					"contentVersion": "1.0.0.0",
					"outputs":        map[string]interface{}{},
					"parameters":     map[string]interface{}{},
					"triggers":       map[string]interface{}{},
				},
				Kind: to.Ptr(armappservice.KindStateful),
			},
		},
		nil)
	if err != nil {
		log.Fatalf("failed to finish the request: %v", err)
	}
}
