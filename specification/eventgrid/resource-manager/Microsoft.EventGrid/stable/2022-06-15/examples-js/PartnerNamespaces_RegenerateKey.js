const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Regenerate a shared access key for a partner namespace.
 *
 * @summary Regenerate a shared access key for a partner namespace.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/PartnerNamespaces_RegenerateKey.json
 */
async function partnerNamespacesRegenerateKey() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerNamespaceName = "examplePartnerNamespaceName1";
  const regenerateKeyRequest = {
    keyName: "key1",
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerNamespaces.regenerateKey(
    resourceGroupName,
    partnerNamespaceName,
    regenerateKeyRequest
  );
  console.log(result);
}

partnerNamespacesRegenerateKey().catch(console.error);
