const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Asynchronously updates a partner topic with the specified parameters.
 *
 * @summary Asynchronously updates a partner topic with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/PartnerTopics_Update.json
 */
async function partnerTopicsUpdate() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerTopicName = "examplePartnerTopicName1";
  const partnerTopicUpdateParameters = {
    tags: { tag1: "value1", tag2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerTopics.update(
    resourceGroupName,
    partnerTopicName,
    partnerTopicUpdateParameters
  );
  console.log(result);
}

partnerTopicsUpdate().catch(console.error);
