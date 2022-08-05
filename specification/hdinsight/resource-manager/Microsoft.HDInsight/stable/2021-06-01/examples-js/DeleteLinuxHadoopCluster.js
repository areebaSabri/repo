const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes the specified HDInsight cluster.
 *
 * @summary Deletes the specified HDInsight cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/DeleteLinuxHadoopCluster.json
 */
async function deleteHadoopOnLinuxCluster() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginDeleteAndWait(resourceGroupName, clusterName);
  console.log(result);
}

deleteHadoopOnLinuxCluster().catch(console.error);
