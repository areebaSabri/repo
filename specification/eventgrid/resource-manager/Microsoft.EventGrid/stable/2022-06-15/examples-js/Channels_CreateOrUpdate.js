const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Synchronously creates or updates a new channel with the specified parameters.
 *
 * @summary Synchronously creates or updates a new channel with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/Channels_CreateOrUpdate.json
 */
async function channelsCreateOrUpdate() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerNamespaceName = "examplePartnerNamespaceName1";
  const channelName = "exampleChannelName1";
  const channelInfo = {
    channelType: "PartnerTopic",
    expirationTimeIfNotActivatedUtc: new Date("2021-10-21T22:50:25.410433Z"),
    messageForActivation: "Example message to approver",
    partnerTopicInfo: {
      name: "examplePartnerTopic1",
      azureSubscriptionId: "5b4b650e-28b9-4790-b3ab-ddbd88d727c4",
      resourceGroupName: "examplerg2",
      source: "ContosoCorp.Accounts.User1",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.channels.createOrUpdate(
    resourceGroupName,
    partnerNamespaceName,
    channelName,
    channelInfo
  );
  console.log(result);
}

channelsCreateOrUpdate().catch(console.error);
