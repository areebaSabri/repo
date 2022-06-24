const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List all global event subscriptions under a resource group for a specific topic type.
 *
 * @summary List all global event subscriptions under a resource group for a specific topic type.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_ListGlobalByResourceGroupForTopicType.json
 */
async function eventSubscriptionsListGlobalByResourceGroupForTopicType() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const topicTypeName = "Microsoft.Resources.ResourceGroups";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.eventSubscriptions.listGlobalByResourceGroupForTopicType(
    resourceGroupName,
    topicTypeName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

eventSubscriptionsListGlobalByResourceGroupForTopicType().catch(console.error);
