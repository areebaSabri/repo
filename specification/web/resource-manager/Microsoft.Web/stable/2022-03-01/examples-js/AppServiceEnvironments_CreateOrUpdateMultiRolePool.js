const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Create or update a multi-role pool.
 *
 * @summary Description for Create or update a multi-role pool.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/AppServiceEnvironments_CreateOrUpdateMultiRolePool.json
 */
async function createOrUpdateAMultiRolePool() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "test-rg";
  const name = "test-ase";
  const multiRolePoolEnvelope = {
    workerCount: 3,
    workerSize: "Medium",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceEnvironments.updateMultiRolePool(
    resourceGroupName,
    name,
    multiRolePoolEnvelope
  );
  console.log(result);
}

createOrUpdateAMultiRolePool().catch(console.error);
