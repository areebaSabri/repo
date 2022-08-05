const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists all the HDInsight clusters under the subscription.
 *
 * @summary Lists all the HDInsight clusters under the subscription.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/GetLinuxHadoopAllClusters.json
 */
async function getAllHadoopOnLinuxClusters() {
  const subscriptionId = "subid";
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.clusters.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getAllHadoopOnLinuxClusters().catch(console.error);
