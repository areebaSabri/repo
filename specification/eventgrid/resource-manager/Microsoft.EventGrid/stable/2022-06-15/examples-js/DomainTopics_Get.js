const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get properties of a domain topic.
 *
 * @summary Get properties of a domain topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/DomainTopics_Get.json
 */
async function domainTopicsGet() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const domainName = "exampledomain2";
  const domainTopicName = "topic1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.domainTopics.get(resourceGroupName, domainName, domainTopicName);
  console.log(result);
}

domainTopicsGet().catch(console.error);
