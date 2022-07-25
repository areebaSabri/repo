const { ManagedServiceIdentityClient } = require("@azure/arm-msi");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update a federated identity credential under the specified user assigned identity.
 *
 * @summary Create or update a federated identity credential under the specified user assigned identity.
 * x-ms-original-file: specification/msi/resource-manager/Microsoft.ManagedIdentity/preview/2022-01-31-preview/examples/FederatedIdentityCredentialCreate.json
 */
async function federatedIdentityCredentialCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rgName";
  const resourceName = "resourceName";
  const federatedIdentityCredentialResourceName = "ficResourceName";
  const parameters = {
    audiences: ["api://AzureADTokenExchange"],
    issuer: "https://oidc.prod-aks.azure.com/IssuerGUID",
    subject: "system:serviceaccount:ns:svcaccount",
  };
  const credential = new DefaultAzureCredential();
  const client = new ManagedServiceIdentityClient(credential, subscriptionId);
  const result = await client.federatedIdentityCredentials.createOrUpdate(
    resourceGroupName,
    resourceName,
    federatedIdentityCredentialResourceName,
    parameters
  );
  console.log(result);
}

federatedIdentityCredentialCreate().catch(console.error);
