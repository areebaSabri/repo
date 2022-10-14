const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update storage for a connectedEnvironment.
 *
 * @summary Create or update storage for a connectedEnvironment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ConnectedEnvironmentsStorages_CreateOrUpdate.json
 */
async function createOrUpdateEnvironmentsStorage() {
  const subscriptionId = "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName = "examplerg";
  const connectedEnvironmentName = "env";
  const storageName = "jlaw-demo1";
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
  const result = await client.connectedEnvironmentsStorages.createOrUpdate(
    resourceGroupName,
    connectedEnvironmentName,
    storageName,
    storageEnvelope
  );
  console.log(result);
}

createOrUpdateEnvironmentsStorage().catch(console.error);
