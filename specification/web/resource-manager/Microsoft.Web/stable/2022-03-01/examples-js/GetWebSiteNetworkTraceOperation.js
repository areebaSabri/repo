const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Gets a named operation for a network trace capturing (or deployment slot, if specified).
 *
 * @summary Description for Gets a named operation for a network trace capturing (or deployment slot, if specified).
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/GetWebSiteNetworkTraceOperation.json
 */
async function getTheCurrentStatusOfANetworkTraceOperationForASite() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testrg123";
  const name = "SampleApp";
  const operationId = "c291433b-53ad-4c49-8cae-0a293eae1c6d";
  const slot = "Production";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.getNetworkTraceOperationSlotV2(
    resourceGroupName,
    name,
    operationId,
    slot
  );
  console.log(result);
}

getTheCurrentStatusOfANetworkTraceOperationForASite().catch(console.error);
