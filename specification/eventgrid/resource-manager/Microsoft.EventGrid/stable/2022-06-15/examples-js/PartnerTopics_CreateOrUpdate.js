const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Asynchronously creates a new partner topic with the specified parameters.
 *
 * @summary Asynchronously creates a new partner topic with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/PartnerTopics_CreateOrUpdate.json
 */
async function partnerTopicsCreateOrUpdate() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerTopicName = "examplePartnerTopicName1";
  const partnerTopicInfo = {
    expirationTimeIfNotActivatedUtc: new Date("2022-03-23T23:06:13.109Z"),
    location: "westus2",
    messageForActivation: "Example message for activation",
    partnerRegistrationImmutableId: "6f541064-031d-4cc8-9ec3-a3b4fc0f7185",
    partnerTopicFriendlyDescription: "Example description",
    source: "ContosoCorp.Accounts.User1",
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerTopics.createOrUpdate(
    resourceGroupName,
    partnerTopicName,
    partnerTopicInfo
  );
  console.log(result);
}

partnerTopicsCreateOrUpdate().catch(console.error);
