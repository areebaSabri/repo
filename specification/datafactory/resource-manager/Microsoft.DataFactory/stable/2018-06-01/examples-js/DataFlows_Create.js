const { DataFactoryManagementClient } = require("@azure/arm-datafactory");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a data flow.
 *
 * @summary Creates or updates a data flow.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/DataFlows_Create.json
 */
async function dataFlowsCreate() {
  const subscriptionId = "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const dataFlowName = "exampleDataFlow";
  const dataFlow = {
    properties: {
      type: "MappingDataFlow",
      description:
        "Sample demo data flow to convert currencies showing usage of union, derive and conditional split transformation.",
      scriptLines: [
        "source(output(",
        "PreviousConversionRate as double,",
        "Country as string,",
        "DateTime1 as string,",
        "CurrentConversionRate as double",
        "),",
        "allowSchemaDrift: false,",
        "validateSchema: false) ~> USDCurrency",
        "source(output(",
        "PreviousConversionRate as double,",
        "Country as string,",
        "DateTime1 as string,",
        "CurrentConversionRate as double",
        "),",
        "allowSchemaDrift: true,",
        "validateSchema: false) ~> CADSource",
        "USDCurrency, CADSource union(byName: true)~> Union",
        "Union derive(NewCurrencyRate = round(CurrentConversionRate*1.25)) ~> NewCurrencyColumn",
        "NewCurrencyColumn split(Country == 'USD',",
        "Country == 'CAD',disjoint: false) ~> ConditionalSplit1@(USD, CAD)",
        "ConditionalSplit1@USD sink(saveMode:'overwrite' ) ~> USDSink",
        "ConditionalSplit1@CAD sink(saveMode:'overwrite' ) ~> CADSink",
      ],
      sinks: [
        {
          name: "USDSink",
          dataset: { type: "DatasetReference", referenceName: "USDOutput" },
        },
        {
          name: "CADSink",
          dataset: { type: "DatasetReference", referenceName: "CADOutput" },
        },
      ],
      sources: [
        {
          name: "USDCurrency",
          dataset: {
            type: "DatasetReference",
            referenceName: "CurrencyDatasetUSD",
          },
        },
        {
          name: "CADSource",
          dataset: {
            type: "DatasetReference",
            referenceName: "CurrencyDatasetCAD",
          },
        },
      ],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.dataFlows.createOrUpdate(
    resourceGroupName,
    factoryName,
    dataFlowName,
    dataFlow
  );
  console.log(result);
}

dataFlowsCreate().catch(console.error);
