const { SubscriptionClient } = require("@azure/arm-subscriptions");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create Alias Subscription.
 *
 * @summary Create Alias Subscription.
 * x-ms-original-file: specification/subscription/resource-manager/Microsoft.Subscription/stable/2021-10-01/examples/createAlias.json
 */
async function createAlias() {
  const aliasName = "aliasForNewSub";
  const body = {
    properties: {
      additionalProperties: {
        managementGroupId: undefined,
        subscriptionOwnerId: "f09b39eb-c496-482c-9ab9-afd799572f4c",
        subscriptionTenantId: "66f6e4d6-07dc-4aea-94ea-e12d3026a3c8",
        tags: { tag1: "Messi", tag2: "Ronaldo", tag3: "Lebron" },
      },
      billingScope:
        "/billingAccounts/af6231a7-7f8d-4fcc-a993-dd8466108d07:c663dac6-a9a5-405a-8938-cd903e12ab5b_2019_05_31/billingProfiles/QWDQ-QWHI-AUW-SJDO-DJH/invoiceSections/FEUF-EUHE-ISJ-SKDW-DJH",
      displayName: "Test Subscription",
      subscriptionId: undefined,
      workload: "Production",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SubscriptionClient(credential);
  const result = await client.alias.beginCreateAndWait(aliasName, body);
  console.log(result);
}

createAlias().catch(console.error);
