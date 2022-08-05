const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Promotes the specified ad-hoc script execution to a persisted script.
 *
 * @summary Promotes the specified ad-hoc script execution to a persisted script.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/PromoteLinuxHadoopScriptAction.json
 */
async function promoteAScriptActionOnHdInsightCluster() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const scriptExecutionId = "391145124054712";
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.scriptExecutionHistory.promote(
    resourceGroupName,
    clusterName,
    scriptExecutionId
  );
  console.log(result);
}

promoteAScriptActionOnHdInsightCluster().catch(console.error);
