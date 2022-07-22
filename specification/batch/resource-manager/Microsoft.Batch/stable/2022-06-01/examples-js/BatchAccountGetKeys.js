const { BatchManagementClient } = require("@azure/arm-batch");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to This operation applies only to Batch accounts with allowedAuthenticationModes containing 'SharedKey'. If the Batch account doesn't contain 'SharedKey' in its allowedAuthenticationMode, clients cannot use shared keys to authenticate, and must use another allowedAuthenticationModes instead. In this case, getting the keys will fail.
 *
 * @summary This operation applies only to Batch accounts with allowedAuthenticationModes containing 'SharedKey'. If the Batch account doesn't contain 'SharedKey' in its allowedAuthenticationMode, clients cannot use shared keys to authenticate, and must use another allowedAuthenticationModes instead. In this case, getting the keys will fail.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-06-01/examples/BatchAccountGetKeys.json
 */
async function batchAccountGetKeys() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const result = await client.batchAccountOperations.getKeys(resourceGroupName, accountName);
  console.log(result);
}

batchAccountGetKeys().catch(console.error);
