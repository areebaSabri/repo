const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update a trusted access role binding
 *
 * @summary Create or update a trusted access role binding
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-08-03-preview/examples/TrustedAccessRoleBindings_CreateOrUpdate.json
 */
async function createOrUpdateATrustedAccessRoleBinding() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const trustedAccessRoleBindingName = "binding1";
  const trustedAccessRoleBinding = {
    roles: [
      "Microsoft.MachineLearningServices/workspaces/reader",
      "Microsoft.MachineLearningServices/workspaces/writer",
    ],
    sourceResourceId:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/b/providers/Microsoft.MachineLearningServices/workspaces/c",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.trustedAccessRoleBindings.createOrUpdate(
    resourceGroupName,
    resourceName,
    trustedAccessRoleBindingName,
    trustedAccessRoleBinding
  );
  console.log(result);
}

createOrUpdateATrustedAccessRoleBinding().catch(console.error);
