package armnetwork_test

import (
	"context"
	"log"

	"github.com/Azure/azure-sdk-for-go/sdk/azcore/to"
	"github.com/Azure/azure-sdk-for-go/sdk/azidentity"
	"github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/network/armnetwork"
)

// Generated from example definition: https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/FirewallPolicyPut.json
func ExampleFirewallPoliciesClient_BeginCreateOrUpdate() {
	cred, err := azidentity.NewDefaultAzureCredential(nil)
	if err != nil {
		log.Fatalf("failed to obtain a credential: %v", err)
	}
	ctx := context.Background()
	client, err := armnetwork.NewFirewallPoliciesClient("subid", cred, nil)
	if err != nil {
		log.Fatalf("failed to create client: %v", err)
	}
	poller, err := client.BeginCreateOrUpdate(ctx, "rg1", "firewallPolicy", armnetwork.FirewallPolicy{
		Location: to.Ptr("West US"),
		Tags: map[string]*string{
			"key1": to.Ptr("value1"),
		},
		Properties: &armnetwork.FirewallPolicyPropertiesFormat{
			DNSSettings: &armnetwork.DNSSettings{
				EnableProxy:                 to.Ptr(true),
				RequireProxyForNetworkRules: to.Ptr(false),
				Servers: []*string{
					to.Ptr("30.3.4.5")},
			},
			Insights: &armnetwork.FirewallPolicyInsights{
				IsEnabled: to.Ptr(true),
				LogAnalyticsResources: &armnetwork.FirewallPolicyLogAnalyticsResources{
					DefaultWorkspaceID: &armnetwork.SubResource{
						ID: to.Ptr("/subscriptions/subid/resourcegroups/rg1/providers/microsoft.operationalinsights/workspaces/defaultWorkspace"),
					},
					Workspaces: []*armnetwork.FirewallPolicyLogAnalyticsWorkspace{
						{
							Region: to.Ptr("westus"),
							WorkspaceID: &armnetwork.SubResource{
								ID: to.Ptr("/subscriptions/subid/resourcegroups/rg1/providers/microsoft.operationalinsights/workspaces/workspace1"),
							},
						},
						{
							Region: to.Ptr("eastus"),
							WorkspaceID: &armnetwork.SubResource{
								ID: to.Ptr("/subscriptions/subid/resourcegroups/rg1/providers/microsoft.operationalinsights/workspaces/workspace2"),
							},
						}},
				},
				RetentionDays: to.Ptr[int32](100),
			},
			IntrusionDetection: &armnetwork.FirewallPolicyIntrusionDetection{
				Configuration: &armnetwork.FirewallPolicyIntrusionDetectionConfiguration{
					BypassTrafficSettings: []*armnetwork.FirewallPolicyIntrusionDetectionBypassTrafficSpecifications{
						{
							Name:        to.Ptr("bypassRule1"),
							Description: to.Ptr("Rule 1"),
							DestinationAddresses: []*string{
								to.Ptr("5.6.7.8")},
							DestinationPorts: []*string{
								to.Ptr("*")},
							SourceAddresses: []*string{
								to.Ptr("1.2.3.4")},
							Protocol: to.Ptr(armnetwork.FirewallPolicyIntrusionDetectionProtocolTCP),
						}},
					SignatureOverrides: []*armnetwork.FirewallPolicyIntrusionDetectionSignatureSpecification{
						{
							ID:   to.Ptr("2525004"),
							Mode: to.Ptr(armnetwork.FirewallPolicyIntrusionDetectionStateTypeDeny),
						}},
				},
				Mode: to.Ptr(armnetwork.FirewallPolicyIntrusionDetectionStateTypeAlert),
			},
			SKU: &armnetwork.FirewallPolicySKU{
				Tier: to.Ptr(armnetwork.FirewallPolicySKUTierPremium),
			},
			Snat: &armnetwork.FirewallPolicySNAT{
				PrivateRanges: []*string{
					to.Ptr("IANAPrivateRanges")},
			},
			SQL: &armnetwork.FirewallPolicySQL{
				AllowSQLRedirect: to.Ptr(true),
			},
			ThreatIntelMode: to.Ptr(armnetwork.AzureFirewallThreatIntelModeAlert),
			ThreatIntelWhitelist: &armnetwork.FirewallPolicyThreatIntelWhitelist{
				Fqdns: []*string{
					to.Ptr("*.microsoft.com")},
				IPAddresses: []*string{
					to.Ptr("20.3.4.5")},
			},
			TransportSecurity: &armnetwork.FirewallPolicyTransportSecurity{
				CertificateAuthority: &armnetwork.FirewallPolicyCertificateAuthority{
					Name:             to.Ptr("clientcert"),
					KeyVaultSecretID: to.Ptr("https://kv/secret"),
				},
			},
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
