const { KeyVaultManagementClient } = require("@azure/arm-keyvault");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the specified deleted managed HSM.
 *
 * @summary Gets the specified deleted managed HSM.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/DeletedManagedHsm_Get.json
 */
async function retrieveADeletedManagedHsm() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const name = "hsm1";
  const location = "westus";
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const result = await client.managedHsms.getDeleted(name, location);
  console.log(result);
}

retrieveADeletedManagedHsm().catch(console.error);
