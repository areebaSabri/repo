const { KeyVaultManagementClient } = require("@azure/arm-keyvault");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the versions of the specified key in the specified key vault.
 *
 * @summary Lists the versions of the specified key in the specified key vault.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/examples/listKeyVersions.json
 */
async function listKeyVersionsInTheVault() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "sample-group";
  const vaultName = "sample-vault-name";
  const keyName = "sample-key-name";
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.keys.listVersions(resourceGroupName, vaultName, keyName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listKeyVersionsInTheVault().catch(console.error);
