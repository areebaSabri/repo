const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a new HDInsight cluster with the specified parameters.
 *
 * @summary Creates a new HDInsight cluster with the specified parameters.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/CreateHDInsightClusterWithEncryptionAtHost.json
 */
async function createClusterWithEncryptionAtHost() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const parameters = {
    properties: {
      clusterDefinition: {
        configurations: {
          gateway: {
            "restAuthCredential.isEnabled": true,
            "restAuthCredential.password": "**********",
            "restAuthCredential.username": "admin",
          },
        },
        kind: "Hadoop",
      },
      clusterVersion: "3.6",
      computeProfile: {
        roles: [
          {
            name: "headnode",
            hardwareProfile: { vmSize: "Standard_DS14_v2" },
            osProfile: {
              linuxOperatingSystemProfile: {
                password: "**********",
                username: "sshuser",
              },
            },
            targetInstanceCount: 2,
          },
          {
            name: "workernode",
            hardwareProfile: { vmSize: "Standard_DS14_v2" },
            osProfile: {
              linuxOperatingSystemProfile: {
                password: "**********",
                username: "sshuser",
              },
            },
            targetInstanceCount: 3,
          },
          {
            name: "zookeepernode",
            hardwareProfile: { vmSize: "Standard_DS14_v2" },
            osProfile: {
              linuxOperatingSystemProfile: {
                password: "**********",
                username: "sshuser",
              },
            },
            targetInstanceCount: 3,
          },
        ],
      },
      diskEncryptionProperties: { encryptionAtHost: true },
      osType: "Linux",
      storageProfile: {
        storageaccounts: [
          {
            name: "mystorage.blob.core.windows.net",
            container: "default8525",
            isDefault: true,
            key: "storagekey",
          },
        ],
      },
      tier: "Standard",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginCreateAndWait(
    resourceGroupName,
    clusterName,
    parameters
  );
  console.log(result);
}

createClusterWithEncryptionAtHost().catch(console.error);
