const { ManagedServiceIdentityClient } = require("@azure/arm-msi");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the identity.
 *
 * @summary Gets the identity.
 * x-ms-original-file: specification/msi/resource-manager/Microsoft.ManagedIdentity/preview/2022-01-31-preview/examples/IdentityGet.json
 */
async function identityGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rgName";
  const resourceName = "resourceName";
  const credential = new DefaultAzureCredential();
  const client = new ManagedServiceIdentityClient(credential, subscriptionId);
  const result = await client.userAssignedIdentities.get(resourceGroupName, resourceName);
  console.log(result);
}

identityGet().catch(console.error);
