const { KeyVaultManagementClient } = require("@azure/arm-keyvault");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Checks that the vault name is valid and is not already in use.
 *
 * @summary Checks that the vault name is valid and is not already in use.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/checkVaultNameAvailability.json
 */
async function validateAVaultName() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = {
    name: "sample-vault",
    type: "Microsoft.KeyVault/vaults",
  };
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const result = await client.vaults.checkNameAvailability(vaultName);
  console.log(result);
}

validateAVaultName().catch(console.error);
