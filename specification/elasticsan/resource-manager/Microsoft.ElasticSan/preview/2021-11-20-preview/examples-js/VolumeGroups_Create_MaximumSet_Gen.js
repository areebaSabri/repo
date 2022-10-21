const { ElasticSanManagement } = require("@azure/arm-elasticsan");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create a Volume Group.
 *
 * @summary Create a Volume Group.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2021-11-20-preview/examples/VolumeGroups_Create_MaximumSet_Gen.json
 */
async function volumeGroupsCreateMaximumSetGen() {
  const subscriptionId = "aaaaaaaaaaaaaaaaaa";
  const resourceGroupName = "rgelasticsan";
  const elasticSanName = "ti7q-k952-1qB3J_5";
  const volumeGroupName = "u_5I_1j4t3";
  const parameters = {
    encryption: "EncryptionAtRestWithPlatformKey",
    networkAcls: {
      virtualNetworkRules: [{ action: "Allow", virtualNetworkResourceId: "aaaaaaaaaaaaaaaa" }],
    },
    protocolType: "Iscsi",
    tags: { key5933: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.volumeGroups.beginCreateAndWait(
    resourceGroupName,
    elasticSanName,
    volumeGroupName,
    parameters
  );
  console.log(result);
}

volumeGroupsCreateMaximumSetGen().catch(console.error);
