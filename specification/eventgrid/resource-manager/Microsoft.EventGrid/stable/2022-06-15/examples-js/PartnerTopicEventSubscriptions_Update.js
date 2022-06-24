const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update an existing event subscription of a partner topic.
 *
 * @summary Update an existing event subscription of a partner topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/PartnerTopicEventSubscriptions_Update.json
 */
async function partnerTopicEventSubscriptionsUpdate() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerTopicName = "examplePartnerTopic1";
  const eventSubscriptionName = "exampleEventSubscriptionName1";
  const eventSubscriptionUpdateParameters = {
    destination: {
      endpointType: "WebHook",
      endpointUrl: "https://requestb.in/15ksip71",
    },
    filter: {
      isSubjectCaseSensitive: true,
      subjectBeginsWith: "existingPrefix",
      subjectEndsWith: "newSuffix",
    },
    labels: ["label1", "label2"],
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerTopicEventSubscriptions.beginUpdateAndWait(
    resourceGroupName,
    partnerTopicName,
    eventSubscriptionName,
    eventSubscriptionUpdateParameters
  );
  console.log(result);
}

partnerTopicEventSubscriptionsUpdate().catch(console.error);
