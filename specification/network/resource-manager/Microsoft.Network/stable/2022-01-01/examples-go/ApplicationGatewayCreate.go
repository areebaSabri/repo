package armnetwork_test

import (
	"context"
	"log"

	"github.com/Azure/azure-sdk-for-go/sdk/azcore/to"
	"github.com/Azure/azure-sdk-for-go/sdk/azidentity"
	"github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/network/armnetwork"
)

// Generated from example definition: https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/ApplicationGatewayCreate.json
func ExampleApplicationGatewaysClient_BeginCreateOrUpdate() {
	cred, err := azidentity.NewDefaultAzureCredential(nil)
	if err != nil {
		log.Fatalf("failed to obtain a credential: %v", err)
	}
	ctx := context.Background()
	client, err := armnetwork.NewApplicationGatewaysClient("subid", cred, nil)
	if err != nil {
		log.Fatalf("failed to create client: %v", err)
	}
	poller, err := client.BeginCreateOrUpdate(ctx, "rg1", "appgw", armnetwork.ApplicationGateway{
		Location: to.Ptr("eastus"),
		Identity: &armnetwork.ManagedServiceIdentity{
			Type: to.Ptr(armnetwork.ResourceIdentityTypeUserAssigned),
			UserAssignedIdentities: map[string]*armnetwork.Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties{
				"/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1": {},
			},
		},
		Properties: &armnetwork.ApplicationGatewayPropertiesFormat{
			BackendAddressPools: []*armnetwork.ApplicationGatewayBackendAddressPool{
				{
					Name: to.Ptr("appgwpool"),
					Properties: &armnetwork.ApplicationGatewayBackendAddressPoolPropertiesFormat{
						BackendAddresses: []*armnetwork.ApplicationGatewayBackendAddress{
							{
								IPAddress: to.Ptr("10.0.1.1"),
							},
							{
								IPAddress: to.Ptr("10.0.1.2"),
							}},
					},
				},
				{
					ID:   to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/appgwpool1"),
					Name: to.Ptr("appgwpool1"),
					Properties: &armnetwork.ApplicationGatewayBackendAddressPoolPropertiesFormat{
						BackendAddresses: []*armnetwork.ApplicationGatewayBackendAddress{
							{},
							{}},
					},
				}},
			BackendHTTPSettingsCollection: []*armnetwork.ApplicationGatewayBackendHTTPSettings{
				{
					Name: to.Ptr("appgwbhs"),
					Properties: &armnetwork.ApplicationGatewayBackendHTTPSettingsPropertiesFormat{
						CookieBasedAffinity: to.Ptr(armnetwork.ApplicationGatewayCookieBasedAffinityDisabled),
						Port:                to.Ptr[int32](80),
						RequestTimeout:      to.Ptr[int32](30),
						Protocol:            to.Ptr(armnetwork.ApplicationGatewayProtocolHTTP),
					},
				}},
			FrontendIPConfigurations: []*armnetwork.ApplicationGatewayFrontendIPConfiguration{
				{
					Name: to.Ptr("appgwfip"),
					Properties: &armnetwork.ApplicationGatewayFrontendIPConfigurationPropertiesFormat{
						PublicIPAddress: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/appgwpip"),
						},
					},
				}},
			FrontendPorts: []*armnetwork.ApplicationGatewayFrontendPort{
				{
					Name: to.Ptr("appgwfp"),
					Properties: &armnetwork.ApplicationGatewayFrontendPortPropertiesFormat{
						Port: to.Ptr[int32](443),
					},
				},
				{
					Name: to.Ptr("appgwfp80"),
					Properties: &armnetwork.ApplicationGatewayFrontendPortPropertiesFormat{
						Port: to.Ptr[int32](80),
					},
				}},
			GatewayIPConfigurations: []*armnetwork.ApplicationGatewayIPConfiguration{
				{
					Name: to.Ptr("appgwipc"),
					Properties: &armnetwork.ApplicationGatewayIPConfigurationPropertiesFormat{
						Subnet: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet/subnets/appgwsubnet"),
						},
					},
				}},
			GlobalConfiguration: &armnetwork.ApplicationGatewayGlobalConfiguration{
				EnableRequestBuffering:  to.Ptr(true),
				EnableResponseBuffering: to.Ptr(true),
			},
			HTTPListeners: []*armnetwork.ApplicationGatewayHTTPListener{
				{
					Name: to.Ptr("appgwhl"),
					Properties: &armnetwork.ApplicationGatewayHTTPListenerPropertiesFormat{
						FrontendIPConfiguration: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/frontendIPConfigurations/appgwfip"),
						},
						FrontendPort: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/frontendPorts/appgwfp"),
						},
						RequireServerNameIndication: to.Ptr(false),
						SSLCertificate: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/sslCertificates/sslcert"),
						},
						SSLProfile: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/sslProfiles/sslProfile1"),
						},
						Protocol: to.Ptr(armnetwork.ApplicationGatewayProtocolHTTPS),
					},
				},
				{
					Name: to.Ptr("appgwhttplistener"),
					Properties: &armnetwork.ApplicationGatewayHTTPListenerPropertiesFormat{
						FrontendIPConfiguration: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/frontendIPConfigurations/appgwfip"),
						},
						FrontendPort: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/frontendPorts/appgwfp80"),
						},
						Protocol: to.Ptr(armnetwork.ApplicationGatewayProtocolHTTP),
					},
				}},
			LoadDistributionPolicies: []*armnetwork.ApplicationGatewayLoadDistributionPolicy{
				{
					Name: to.Ptr("ldp1"),
					Properties: &armnetwork.ApplicationGatewayLoadDistributionPolicyPropertiesFormat{
						LoadDistributionAlgorithm: to.Ptr(armnetwork.ApplicationGatewayLoadDistributionAlgorithmRoundRobin),
						LoadDistributionTargets: []*armnetwork.ApplicationGatewayLoadDistributionTarget{
							{
								Name: to.Ptr("ld11"),
								Properties: &armnetwork.ApplicationGatewayLoadDistributionTargetPropertiesFormat{
									BackendAddressPool: &armnetwork.SubResource{
										ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/appgwpool"),
									},
									WeightPerServer: to.Ptr[int32](40),
								},
							},
							{
								Name: to.Ptr("ld11"),
								Properties: &armnetwork.ApplicationGatewayLoadDistributionTargetPropertiesFormat{
									BackendAddressPool: &armnetwork.SubResource{
										ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/appgwpool1"),
									},
									WeightPerServer: to.Ptr[int32](60),
								},
							}},
					},
				}},
			RequestRoutingRules: []*armnetwork.ApplicationGatewayRequestRoutingRule{
				{
					Name: to.Ptr("appgwrule"),
					Properties: &armnetwork.ApplicationGatewayRequestRoutingRulePropertiesFormat{
						BackendAddressPool: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/appgwpool"),
						},
						BackendHTTPSettings: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendHttpSettingsCollection/appgwbhs"),
						},
						HTTPListener: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/httpListeners/appgwhl"),
						},
						LoadDistributionPolicy: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/loadDistributionPolicies/ldp1"),
						},
						Priority: to.Ptr[int32](10),
						RewriteRuleSet: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/rewriteRuleSets/rewriteRuleSet1"),
						},
						RuleType: to.Ptr(armnetwork.ApplicationGatewayRequestRoutingRuleTypeBasic),
					},
				},
				{
					Name: to.Ptr("appgwPathBasedRule"),
					Properties: &armnetwork.ApplicationGatewayRequestRoutingRulePropertiesFormat{
						HTTPListener: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/httpListeners/appgwhttplistener"),
						},
						Priority: to.Ptr[int32](20),
						RuleType: to.Ptr(armnetwork.ApplicationGatewayRequestRoutingRuleTypePathBasedRouting),
						URLPathMap: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/urlPathMaps/pathMap1"),
						},
					},
				}},
			RewriteRuleSets: []*armnetwork.ApplicationGatewayRewriteRuleSet{
				{
					Name: to.Ptr("rewriteRuleSet1"),
					Properties: &armnetwork.ApplicationGatewayRewriteRuleSetPropertiesFormat{
						RewriteRules: []*armnetwork.ApplicationGatewayRewriteRule{
							{
								Name: to.Ptr("Set X-Forwarded-For"),
								ActionSet: &armnetwork.ApplicationGatewayRewriteRuleActionSet{
									RequestHeaderConfigurations: []*armnetwork.ApplicationGatewayHeaderConfiguration{
										{
											HeaderName:  to.Ptr("X-Forwarded-For"),
											HeaderValue: to.Ptr("{var_add_x_forwarded_for_proxy}"),
										}},
									ResponseHeaderConfigurations: []*armnetwork.ApplicationGatewayHeaderConfiguration{
										{
											HeaderName:  to.Ptr("Strict-Transport-Security"),
											HeaderValue: to.Ptr("max-age=31536000"),
										}},
									URLConfiguration: &armnetwork.ApplicationGatewayURLConfiguration{
										ModifiedPath: to.Ptr("/abc"),
									},
								},
								Conditions: []*armnetwork.ApplicationGatewayRewriteRuleCondition{
									{
										IgnoreCase: to.Ptr(true),
										Negate:     to.Ptr(false),
										Pattern:    to.Ptr("^Bearer"),
										Variable:   to.Ptr("http_req_Authorization"),
									}},
								RuleSequence: to.Ptr[int32](102),
							}},
					},
				}},
			SKU: &armnetwork.ApplicationGatewaySKU{
				Name:     to.Ptr(armnetwork.ApplicationGatewaySKUNameStandardV2),
				Capacity: to.Ptr[int32](3),
				Tier:     to.Ptr(armnetwork.ApplicationGatewayTierStandardV2),
			},
			SSLCertificates: []*armnetwork.ApplicationGatewaySSLCertificate{
				{
					Name: to.Ptr("sslcert"),
					Properties: &armnetwork.ApplicationGatewaySSLCertificatePropertiesFormat{
						Data:     to.Ptr("****"),
						Password: to.Ptr("****"),
					},
				},
				{
					Name: to.Ptr("sslcert2"),
					Properties: &armnetwork.ApplicationGatewaySSLCertificatePropertiesFormat{
						KeyVaultSecretID: to.Ptr("https://kv/secret"),
					},
				}},
			SSLProfiles: []*armnetwork.ApplicationGatewaySSLProfile{
				{
					Name: to.Ptr("sslProfile1"),
					Properties: &armnetwork.ApplicationGatewaySSLProfilePropertiesFormat{
						ClientAuthConfiguration: &armnetwork.ApplicationGatewayClientAuthConfiguration{
							VerifyClientCertIssuerDN: to.Ptr(true),
						},
						SSLPolicy: &armnetwork.ApplicationGatewaySSLPolicy{
							CipherSuites: []*armnetwork.ApplicationGatewaySSLCipherSuite{
								to.Ptr(armnetwork.ApplicationGatewaySSLCipherSuiteTLSECDHERSAWITHAES128CBCSHA256)},
							MinProtocolVersion: to.Ptr(armnetwork.ApplicationGatewaySSLProtocolTLSv11),
							PolicyType:         to.Ptr(armnetwork.ApplicationGatewaySSLPolicyTypeCustom),
						},
						TrustedClientCertificates: []*armnetwork.SubResource{
							{
								ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/trustedClientCertificates/clientcert"),
							}},
					},
				}},
			TrustedClientCertificates: []*armnetwork.ApplicationGatewayTrustedClientCertificate{
				{
					Name: to.Ptr("clientcert"),
					Properties: &armnetwork.ApplicationGatewayTrustedClientCertificatePropertiesFormat{
						Data: to.Ptr("****"),
					},
				}},
			TrustedRootCertificates: []*armnetwork.ApplicationGatewayTrustedRootCertificate{
				{
					Name: to.Ptr("rootcert"),
					Properties: &armnetwork.ApplicationGatewayTrustedRootCertificatePropertiesFormat{
						Data: to.Ptr("****"),
					},
				},
				{
					Name: to.Ptr("rootcert1"),
					Properties: &armnetwork.ApplicationGatewayTrustedRootCertificatePropertiesFormat{
						KeyVaultSecretID: to.Ptr("https://kv/secret"),
					},
				}},
			URLPathMaps: []*armnetwork.ApplicationGatewayURLPathMap{
				{
					Name: to.Ptr("pathMap1"),
					Properties: &armnetwork.ApplicationGatewayURLPathMapPropertiesFormat{
						DefaultBackendAddressPool: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/appgwpool"),
						},
						DefaultBackendHTTPSettings: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendHttpSettingsCollection/appgwbhs"),
						},
						DefaultLoadDistributionPolicy: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/loadDistributionPolicies/ldp1"),
						},
						DefaultRewriteRuleSet: &armnetwork.SubResource{
							ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/rewriteRuleSets/rewriteRuleSet1"),
						},
						PathRules: []*armnetwork.ApplicationGatewayPathRule{
							{
								Name: to.Ptr("apiPaths"),
								Properties: &armnetwork.ApplicationGatewayPathRulePropertiesFormat{
									BackendAddressPool: &armnetwork.SubResource{
										ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/appgwpool"),
									},
									BackendHTTPSettings: &armnetwork.SubResource{
										ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendHttpSettingsCollection/appgwbhs"),
									},
									LoadDistributionPolicy: &armnetwork.SubResource{
										ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/loadDistributionPolicies/ldp1"),
									},
									Paths: []*string{
										to.Ptr("/api"),
										to.Ptr("/v1/api")},
									RewriteRuleSet: &armnetwork.SubResource{
										ID: to.Ptr("/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/rewriteRuleSets/rewriteRuleSet1"),
									},
								},
							}},
					},
				}},
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
