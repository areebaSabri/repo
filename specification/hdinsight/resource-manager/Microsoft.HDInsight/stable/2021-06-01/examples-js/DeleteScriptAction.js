const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes a specified persisted script action of the cluster.
 *
 * @summary Deletes a specified persisted script action of the cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/DeleteScriptAction.json
 */
async function deleteAScriptActionOnHdInsightCluster() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const scriptName = "scriptName";
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.scriptActions.delete(resourceGroupName, clusterName, scriptName);
  console.log(result);
}

deleteAScriptActionOnHdInsightCluster().catch(console.error);
