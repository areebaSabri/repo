const { DeviceUpdate } = require("@azure/arm-deviceupdate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates account's patchable properties
 *
 * @summary Updates account's patchable properties
 * x-ms-original-file: specification/deviceupdate/resource-manager/Microsoft.DeviceUpdate/preview/2022-04-01-preview/examples/Accounts/Accounts_Update.json
 */
async function updatesAccount() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "test-rg";
  const accountName = "contoso";
  const accountUpdatePayload = { tags: { tagKey: "tagValue" } };
  const credential = new DefaultAzureCredential();
  const client = new DeviceUpdate(credential, subscriptionId);
  const result = await client.accounts.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    accountUpdatePayload
  );
  console.log(result);
}

updatesAccount().catch(console.error);
