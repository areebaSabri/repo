const { ContainerAppsAPIClient } = require("@azure/arm-app");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update storage for a managedEnvironment.
 *
 * @summary Create or update storage for a managedEnvironment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-01-01-preview/examples/ManagedEnvironmentsStorages_CreateOrUpdate.json
 */
async function createOrUpdateEnvironmentsStorage() {
  const subscriptionId = "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName = "examplerg";
  const envName = "managedEnv";
  const name = "jlaw-demo1";
  const storageEnvelope = {
    properties: {
      azureFile: {
        accessMode: "ReadOnly",
        accountKey: "key",
        accountName: "account1",
        shareName: "share1",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.managedEnvironmentsStorages.createOrUpdate(
    resourceGroupName,
    envName,
    name,
    storageEnvelope
  );
  console.log(result);
}

createOrUpdateEnvironmentsStorage().catch(console.error);
