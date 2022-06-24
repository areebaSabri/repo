const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List all aggregated global event subscriptions under a specific Azure subscription.
 *
 * @summary List all aggregated global event subscriptions under a specific Azure subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_ListGlobalBySubscription.json
 */
async function eventSubscriptionsListGlobalBySubscription() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.eventSubscriptions.listGlobalBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

eventSubscriptionsListGlobalBySubscription().catch(console.error);
