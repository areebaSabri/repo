package armdatafactory_test

import (
	"context"
	"log"

	"github.com/Azure/azure-sdk-for-go/sdk/azcore/to"
	"github.com/Azure/azure-sdk-for-go/sdk/azidentity"
	"github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/datafactory/armdatafactory/v2"
)

// Generated from example definition: https://github.com/Azure/azure-rest-api-specs/tree/main/specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/DataFlows_Update.json
func ExampleDataFlowsClient_CreateOrUpdate_dataFlowsUpdate() {
	cred, err := azidentity.NewDefaultAzureCredential(nil)
	if err != nil {
		log.Fatalf("failed to obtain a credential: %v", err)
	}
	ctx := context.Background()
	client, err := armdatafactory.NewDataFlowsClient("12345678-1234-1234-1234-12345678abc", cred, nil)
	if err != nil {
		log.Fatalf("failed to create client: %v", err)
	}
	res, err := client.CreateOrUpdate(ctx, "exampleResourceGroup", "exampleFactoryName", "exampleDataFlow", armdatafactory.DataFlowResource{
		Properties: &armdatafactory.MappingDataFlow{
			Type:        to.Ptr("MappingDataFlow"),
			Description: to.Ptr("Sample demo data flow to convert currencies showing usage of union, derive and conditional split transformation."),
			TypeProperties: &armdatafactory.MappingDataFlowTypeProperties{
				ScriptLines: []*string{
					to.Ptr("source(output("),
					to.Ptr("PreviousConversionRate as double,"),
					to.Ptr("Country as string,"),
					to.Ptr("DateTime1 as string,"),
					to.Ptr("CurrentConversionRate as double"),
					to.Ptr("),"),
					to.Ptr("allowSchemaDrift: false,"),
					to.Ptr("validateSchema: false) ~> USDCurrency"),
					to.Ptr("source(output("),
					to.Ptr("PreviousConversionRate as double,"),
					to.Ptr("Country as string,"),
					to.Ptr("DateTime1 as string,"),
					to.Ptr("CurrentConversionRate as double"),
					to.Ptr("),"),
					to.Ptr("allowSchemaDrift: true,"),
					to.Ptr("validateSchema: false) ~> CADSource"),
					to.Ptr("USDCurrency, CADSource union(byName: true)~> Union"),
					to.Ptr("Union derive(NewCurrencyRate = round(CurrentConversionRate*1.25)) ~> NewCurrencyColumn"),
					to.Ptr("NewCurrencyColumn split(Country == 'USD',"),
					to.Ptr("Country == 'CAD',disjoint: false) ~> ConditionalSplit1@(USD, CAD)"),
					to.Ptr("ConditionalSplit1@USD sink(saveMode:'overwrite' ) ~> USDSink"),
					to.Ptr("ConditionalSplit1@CAD sink(saveMode:'overwrite' ) ~> CADSink")},
				Sinks: []*armdatafactory.DataFlowSink{
					{
						Name: to.Ptr("USDSink"),
						Dataset: &armdatafactory.DatasetReference{
							Type:          to.Ptr(armdatafactory.DatasetReferenceTypeDatasetReference),
							ReferenceName: to.Ptr("USDOutput"),
						},
					},
					{
						Name: to.Ptr("CADSink"),
						Dataset: &armdatafactory.DatasetReference{
							Type:          to.Ptr(armdatafactory.DatasetReferenceTypeDatasetReference),
							ReferenceName: to.Ptr("CADOutput"),
						},
					}},
				Sources: []*armdatafactory.DataFlowSource{
					{
						Name: to.Ptr("USDCurrency"),
						Dataset: &armdatafactory.DatasetReference{
							Type:          to.Ptr(armdatafactory.DatasetReferenceTypeDatasetReference),
							ReferenceName: to.Ptr("CurrencyDatasetUSD"),
						},
					},
					{
						Name: to.Ptr("CADSource"),
						Dataset: &armdatafactory.DatasetReference{
							Type:          to.Ptr(armdatafactory.DatasetReferenceTypeDatasetReference),
							ReferenceName: to.Ptr("CurrencyDatasetCAD"),
						},
					}},
			},
		},
	}, &armdatafactory.DataFlowsClientCreateOrUpdateOptions{IfMatch: nil})
	if err != nil {
		log.Fatalf("failed to finish the request: %v", err)
	}
	// TODO: use response item
	_ = res
}
