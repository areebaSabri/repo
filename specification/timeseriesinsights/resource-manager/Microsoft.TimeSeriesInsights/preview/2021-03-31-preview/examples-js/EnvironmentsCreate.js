const { TimeSeriesInsightsClient } = require("@azure/arm-timeseriesinsights");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update an environment in the specified subscription and resource group.
 *
 * @summary Create or update an environment in the specified subscription and resource group.
 * x-ms-original-file: specification/timeseriesinsights/resource-manager/Microsoft.TimeSeriesInsights/preview/2021-03-31-preview/examples/EnvironmentsCreate.json
 */
async function environmentsCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const environmentName = "env1";
  const parameters = {
    dataRetentionTime: "P31D",
    kind: "Gen1",
    location: "West US",
    partitionKeyProperties: [{ name: "DeviceId1", type: "String" }],
    sku: { name: "S1", capacity: 1 },
  };
  const credential = new DefaultAzureCredential();
  const client = new TimeSeriesInsightsClient(credential, subscriptionId);
  const result = await client.environments.beginCreateOrUpdateAndWait(
    resourceGroupName,
    environmentName,
    parameters
  );
  console.log(result);
}

environmentsCreate().catch(console.error);
