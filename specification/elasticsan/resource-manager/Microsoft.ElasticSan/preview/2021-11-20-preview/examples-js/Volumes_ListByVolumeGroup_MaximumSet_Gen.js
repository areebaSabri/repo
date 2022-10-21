const { ElasticSanManagement } = require("@azure/arm-elasticsan");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List Volumes in a VolumeGroup.
 *
 * @summary List Volumes in a VolumeGroup.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2021-11-20-preview/examples/Volumes_ListByVolumeGroup_MaximumSet_Gen.json
 */
async function volumesListByVolumeGroupMaximumSetGen() {
  const subscriptionId = "aaaaaaaaaaaaaaaaaa";
  const resourceGroupName = "rgelasticsan";
  const elasticSanName = "ti7q-k952-1qB3J_5";
  const volumeGroupName = "u_5I_1j4t3";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.volumes.listByVolumeGroup(
    resourceGroupName,
    elasticSanName,
    volumeGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

volumesListByVolumeGroupMaximumSetGen().catch(console.error);
