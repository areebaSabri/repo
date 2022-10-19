package armmonitor_test

import (
	"context"
	"log"

	"github.com/Azure/azure-sdk-for-go/sdk/azidentity"
	"github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/monitor/armmonitor"
)

// Generated from example definition: https://github.com/Azure/azure-rest-api-specs/tree/main/specification/monitor/resource-manager/Microsoft.Insights/stable/2022-10-01/examples/GetPredictiveMetric.json
func ExamplePredictiveMetricClient_Get() {
	cred, err := azidentity.NewDefaultAzureCredential(nil)
	if err != nil {
		log.Fatalf("failed to obtain a credential: %v", err)
	}
	ctx := context.Background()
	client, err := armmonitor.NewPredictiveMetricClient("00000000-0000-0000-0000-000000000000", cred, nil)
	if err != nil {
		log.Fatalf("failed to create client: %v", err)
	}
	res, err := client.Get(ctx, "myRG", "vmss1-Autoscale-775", "2021-10-14T22:00:00.000Z/2021-10-16T22:00:00.000Z", "PT1H", "Microsoft.Compute/virtualMachineScaleSets", "PercentageCPU", "Total", nil)
	if err != nil {
		log.Fatalf("failed to finish the request: %v", err)
	}
	// TODO: use response item
	_ = res
}
