const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Unauthorize a single partner either by partner registration immutable Id or by partner name.
 *
 * @summary Unauthorize a single partner either by partner registration immutable Id or by partner name.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/PartnerConfigurations_UnauthorizePartner.json
 */
async function partnerConfigurationsUnauthorizePartner() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerInfo = {
    authorizationExpirationTimeInUtc: new Date("2022-01-28T01:20:55.142Z"),
    partnerName: "Contoso.Finance",
    partnerRegistrationImmutableId: "941892bc-f5d0-4d1c-8fb5-477570fc2b71",
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerConfigurations.unauthorizePartner(
    resourceGroupName,
    partnerInfo
  );
  console.log(result);
}

partnerConfigurationsUnauthorizePartner().catch(console.error);
