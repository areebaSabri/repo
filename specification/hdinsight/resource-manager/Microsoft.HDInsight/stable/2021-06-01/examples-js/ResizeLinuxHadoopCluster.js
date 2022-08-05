const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Resizes the specified HDInsight cluster to the specified size.
 *
 * @summary Resizes the specified HDInsight cluster to the specified size.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/ResizeLinuxHadoopCluster.json
 */
async function resizeTheWorkerNodesForAHadoopOnLinuxCluster() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const roleName = "workernode";
  const parameters = { targetInstanceCount: 10 };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginResizeAndWait(
    resourceGroupName,
    clusterName,
    roleName,
    parameters
  );
  console.log(result);
}

resizeTheWorkerNodesForAHadoopOnLinuxCluster().catch(console.error);
