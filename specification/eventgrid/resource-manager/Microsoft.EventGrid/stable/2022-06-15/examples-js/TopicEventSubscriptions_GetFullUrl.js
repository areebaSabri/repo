const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the full endpoint URL for an event subscription for topic.
 *
 * @summary Get the full endpoint URL for an event subscription for topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/TopicEventSubscriptions_GetFullUrl.json
 */
async function topicEventSubscriptionsGetFullUrl() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const topicName = "exampleTopic1";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.topicEventSubscriptions.getFullUrl(
    resourceGroupName,
    topicName,
    eventSubscriptionName
  );
  console.log(result);
}

topicEventSubscriptionsGetFullUrl().catch(console.error);
