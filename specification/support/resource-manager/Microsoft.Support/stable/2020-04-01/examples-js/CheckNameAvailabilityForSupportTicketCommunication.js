const { MicrosoftSupport } = require("@azure/arm-support");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Check the availability of a resource name. This API should be used to check the uniqueness of the name for adding a new communication to the support ticket.
 *
 * @summary Check the availability of a resource name. This API should be used to check the uniqueness of the name for adding a new communication to the support ticket.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/stable/2020-04-01/examples/CheckNameAvailabilityForSupportTicketCommunication.json
 */
async function checksWhetherNameIsAvailableForCommunicationResource() {
  const subscriptionId = "subid";
  const supportTicketName = "testticket";
  const checkNameAvailabilityInput = {
    name: "sampleName",
    type: "Microsoft.Support/communications",
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const result = await client.communications.checkNameAvailability(
    supportTicketName,
    checkNameAvailabilityInput
  );
  console.log(result);
}

checksWhetherNameIsAvailableForCommunicationResource().catch(console.error);
