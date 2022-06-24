const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the full endpoint URL for an event subscription.
 *
 * @summary Get the full endpoint URL for an event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_GetFullUrlForSubscription.json
 */
async function eventSubscriptionsGetFullUrlForSubscription() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const scope = "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const eventSubscriptionName = "examplesubscription3";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.eventSubscriptions.getFullUrl(scope, eventSubscriptionName);
  console.log(result);
}

eventSubscriptionsGetFullUrlForSubscription().catch(console.error);
