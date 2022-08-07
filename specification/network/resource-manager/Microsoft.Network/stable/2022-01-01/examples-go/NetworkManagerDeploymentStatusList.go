package armnetwork_test

import (
	"context"
	"log"

	"github.com/Azure/azure-sdk-for-go/sdk/azcore/to"
	"github.com/Azure/azure-sdk-for-go/sdk/azidentity"
	"github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/network/armnetwork"
)

// Generated from example definition: https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/NetworkManagerDeploymentStatusList.json
func ExampleManagerDeploymentStatusClient_List() {
	cred, err := azidentity.NewDefaultAzureCredential(nil)
	if err != nil {
		log.Fatalf("failed to obtain a credential: %v", err)
	}
	ctx := context.Background()
	client, err := armnetwork.NewManagerDeploymentStatusClient("subscriptionC", cred, nil)
	if err != nil {
		log.Fatalf("failed to create client: %v", err)
	}
	res, err := client.List(ctx, "resoureGroupSample", "testNetworkManager", armnetwork.ManagerDeploymentStatusParameter{
		DeploymentTypes: []*armnetwork.ConfigurationType{
			to.Ptr(armnetwork.ConfigurationTypeConnectivity),
			to.Ptr(armnetwork.ConfigurationType("AdminPolicy"))},
		Regions: []*string{
			to.Ptr("eastus"),
			to.Ptr("westus")},
		SkipToken: to.Ptr("FakeSkipTokenCode"),
	}, nil)
	if err != nil {
		log.Fatalf("failed to finish the request: %v", err)
	}
	// TODO: use response item
	_ = res
}
