const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a datastore in a private cloud cluster
 *
 * @summary Get a datastore in a private cloud cluster
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/Datastores_Get.json
 */
async function datastoresGet() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const clusterName = "cluster1";
  const datastoreName = "datastore1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.datastores.get(
    resourceGroupName,
    privateCloudName,
    clusterName,
    datastoreName
  );
  console.log(result);
}

datastoresGet().catch(console.error);
