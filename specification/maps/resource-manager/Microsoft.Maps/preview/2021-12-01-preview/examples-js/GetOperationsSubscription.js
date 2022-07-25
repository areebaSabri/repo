const { AzureMapsManagementClient } = require("@azure/arm-maps");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List operations available for the Maps Resource Provider
 *
 * @summary List operations available for the Maps Resource Provider
 * x-ms-original-file: specification/maps/resource-manager/Microsoft.Maps/preview/2021-12-01-preview/examples/GetOperationsSubscription.json
 */
async function getOperationsBySubscription() {
  const subscriptionId = "21a9967a-e8a9-4656-a70b-96ff1c4d05a0";
  const credential = new DefaultAzureCredential();
  const client = new AzureMapsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.maps.listSubscriptionOperations()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getOperationsBySubscription().catch(console.error);
