package armmediaservices_test

import (
	"context"
	"log"

	"github.com/Azure/azure-sdk-for-go/sdk/azcore/to"
	"github.com/Azure/azure-sdk-for-go/sdk/azidentity"
	"github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/mediaservices/armmediaservices/v3"
)

// Generated from example definition: https://github.com/Azure/azure-rest-api-specs/tree/main/specification/mediaservices/resource-manager/Microsoft.Media/stable/2022-08-01/examples/streaming-policies-create-commonEncryptionCenc-clearKeyEncryption.json
func ExampleStreamingPoliciesClient_Create_createsAStreamingPolicyWithClearKeyEncryptionInCommonEncryptionCenc() {
	cred, err := azidentity.NewDefaultAzureCredential(nil)
	if err != nil {
		log.Fatalf("failed to obtain a credential: %v", err)
	}
	ctx := context.Background()
	client, err := armmediaservices.NewStreamingPoliciesClient("00000000-0000-0000-0000-000000000000", cred, nil)
	if err != nil {
		log.Fatalf("failed to create client: %v", err)
	}
	_, err = client.Create(ctx, "contoso", "contosomedia", "UserCreatedSecureStreamingPolicyWithCommonEncryptionCencOnly", armmediaservices.StreamingPolicy{
		Properties: &armmediaservices.StreamingPolicyProperties{
			CommonEncryptionCenc: &armmediaservices.CommonEncryptionCenc{
				ClearKeyEncryptionConfiguration: &armmediaservices.ClearKeyEncryptionConfiguration{
					CustomKeysAcquisitionURLTemplate: to.Ptr("https://contoso.com/{AlternativeMediaId}/clearkey/"),
				},
				ClearTracks: []*armmediaservices.TrackSelection{
					{
						TrackSelections: []*armmediaservices.TrackPropertyCondition{
							{
								Operation: to.Ptr(armmediaservices.TrackPropertyCompareOperationEqual),
								Property:  to.Ptr(armmediaservices.TrackPropertyTypeFourCC),
								Value:     to.Ptr("hev1"),
							}},
					}},
				ContentKeys: &armmediaservices.StreamingPolicyContentKeys{
					DefaultKey: &armmediaservices.DefaultKey{
						Label: to.Ptr("cencDefaultKey"),
					},
				},
				EnabledProtocols: &armmediaservices.EnabledProtocols{
					Dash:            to.Ptr(true),
					Download:        to.Ptr(false),
					Hls:             to.Ptr(false),
					SmoothStreaming: to.Ptr(true),
				},
			},
			DefaultContentKeyPolicyName: to.Ptr("PolicyWithPlayReadyOptionAndOpenRestriction"),
		},
	}, nil)
	if err != nil {
		log.Fatalf("failed to finish the request: %v", err)
	}
}
