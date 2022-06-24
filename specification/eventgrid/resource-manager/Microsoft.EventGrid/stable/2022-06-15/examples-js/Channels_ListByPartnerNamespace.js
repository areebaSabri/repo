const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List all the channels in a partner namespace.
 *
 * @summary List all the channels in a partner namespace.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/Channels_ListByPartnerNamespace.json
 */
async function channelsListByPartnerNamespace() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerNamespaceName = "examplePartnerNamespaceName1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.channels.listByPartnerNamespace(
    resourceGroupName,
    partnerNamespaceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

channelsListByPartnerNamespace().catch(console.error);
