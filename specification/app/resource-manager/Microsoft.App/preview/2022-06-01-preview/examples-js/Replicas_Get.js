const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a replica for a Container App Revision.
 *
 * @summary Get a replica for a Container App Revision.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/Replicas_Get.json
 */
async function getContainerAppRevisionReplica() {
  const subscriptionId = "651f8027-33e8-4ec4-97b4-f6e9f3dc8744";
  const resourceGroupName = "workerapps-rg-xj";
  const containerAppName = "myapp";
  const revisionName = "myapp--0wlqy09";
  const replicaName = "myapp--0wlqy09-5d9774cff-5wnd8";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.containerAppsRevisionReplicas.getReplica(
    resourceGroupName,
    containerAppName,
    revisionName,
    replicaName
  );
  console.log(result);
}

getContainerAppRevisionReplica().catch(console.error);
