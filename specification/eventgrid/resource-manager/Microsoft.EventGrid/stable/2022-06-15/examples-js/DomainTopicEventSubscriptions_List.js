const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List all event subscriptions that have been created for a specific domain topic.
 *
 * @summary List all event subscriptions that have been created for a specific domain topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/DomainTopicEventSubscriptions_List.json
 */
async function domainTopicEventSubscriptionsList() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const domainName = "exampleDomain1";
  const topicName = "exampleDomainTopic1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.domainTopicEventSubscriptions.list(
    resourceGroupName,
    domainName,
    topicName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

domainTopicEventSubscriptionsList().catch(console.error);
