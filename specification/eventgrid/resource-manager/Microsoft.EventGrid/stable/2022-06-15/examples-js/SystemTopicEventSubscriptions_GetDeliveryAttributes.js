const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get all delivery attributes for an event subscription.
 *
 * @summary Get all delivery attributes for an event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/SystemTopicEventSubscriptions_GetDeliveryAttributes.json
 */
async function systemTopicEventSubscriptionsGetDeliveryAttributes() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const systemTopicName = "exampleSystemTopic1";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.systemTopicEventSubscriptions.getDeliveryAttributes(
    resourceGroupName,
    systemTopicName,
    eventSubscriptionName
  );
  console.log(result);
}

systemTopicEventSubscriptionsGetDeliveryAttributes().catch(console.error);
