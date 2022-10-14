const { DevCenterClient } = require("@azure/arm-devcenter");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Partially updates a project environment type.
 *
 * @summary Partially updates a project environment type.
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-09-01-preview/examples/ProjectEnvironmentTypes_Patch.json
 */
async function projectEnvironmentTypesUpdate() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "rg1";
  const projectName = "ContosoProj";
  const environmentTypeName = "{environmentTypeName}";
  const body = {
    deploymentTargetId: "/subscriptions/00000000-0000-0000-0000-000000000000",
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/00000000000000000000000000000000/resourcegroups/identityGroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/testidentity1":
          {},
      },
    },
    status: "Enabled",
    tags: { costCenter: "RnD" },
    userRoleAssignments: {
      e45e3m7c176e416aB4660c5ec8298f8a: {
        roles: { "4cbf0b6cE750441c98a710da8387e4d6": {} },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.projectEnvironmentTypes.update(
    resourceGroupName,
    projectName,
    environmentTypeName,
    body
  );
  console.log(result);
}

projectEnvironmentTypesUpdate().catch(console.error);
