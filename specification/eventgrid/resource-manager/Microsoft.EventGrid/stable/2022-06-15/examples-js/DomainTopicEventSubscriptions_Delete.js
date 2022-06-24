const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete a nested existing event subscription for a domain topic.
 *
 * @summary Delete a nested existing event subscription for a domain topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/DomainTopicEventSubscriptions_Delete.json
 */
async function domainTopicEventSubscriptionsDelete() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const domainName = "exampleDomain1";
  const topicName = "exampleDomainTopic1";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.domainTopicEventSubscriptions.beginDeleteAndWait(
    resourceGroupName,
    domainName,
    topicName,
    eventSubscriptionName
  );
  console.log(result);
}

domainTopicEventSubscriptionsDelete().catch(console.error);
