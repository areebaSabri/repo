const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Asynchronously creates or updates an event subscription with the specified parameters. Existing event subscriptions will be updated with this API.
 *
 * @summary Asynchronously creates or updates an event subscription with the specified parameters. Existing event subscriptions will be updated with this API.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/SystemTopicEventSubscriptions_CreateOrUpdate.json
 */
async function systemTopicEventSubscriptionsCreateOrUpdate() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const systemTopicName = "exampleSystemTopic1";
  const eventSubscriptionName = "exampleEventSubscriptionName1";
  const eventSubscriptionInfo = {
    destination: {
      endpointType: "WebHook",
      endpointUrl: "https://requestb.in/15ksip71",
    },
    filter: {
      isSubjectCaseSensitive: false,
      subjectBeginsWith: "ExamplePrefix",
      subjectEndsWith: "ExampleSuffix",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.systemTopicEventSubscriptions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    systemTopicName,
    eventSubscriptionName,
    eventSubscriptionInfo
  );
  console.log(result);
}

systemTopicEventSubscriptionsCreateOrUpdate().catch(console.error);
