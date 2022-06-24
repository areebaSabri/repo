const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Asynchronously updates a partner namespace with the specified parameters.
 *
 * @summary Asynchronously updates a partner namespace with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/PartnerNamespaces_Update.json
 */
async function partnerNamespacesUpdate() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerNamespaceName = "examplePartnerNamespaceName1";
  const partnerNamespaceUpdateParameters = {
    tags: { tag1: "value1" },
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerNamespaces.beginUpdateAndWait(
    resourceGroupName,
    partnerNamespaceName,
    partnerNamespaceUpdateParameters
  );
  console.log(result);
}

partnerNamespacesUpdate().catch(console.error);
