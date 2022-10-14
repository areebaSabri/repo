const { DevCenterClient } = require("@azure/arm-devcenter");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets an environment type.
 *
 * @summary Gets an environment type.
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-09-01-preview/examples/EnvironmentTypes_Get.json
 */
async function environmentTypesGet() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "rg1";
  const devCenterName = "Contoso";
  const environmentTypeName = "{environmentTypeName}";
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.environmentTypes.get(
    resourceGroupName,
    devCenterName,
    environmentTypeName
  );
  console.log(result);
}

environmentTypesGet().catch(console.error);
