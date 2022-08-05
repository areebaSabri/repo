const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Enables the Azure Monitor on the HDInsight cluster.
 *
 * @summary Enables the Azure Monitor on the HDInsight cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/EnableLinuxClusterAzureMonitor.json
 */
async function enableClusterMonitoring() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const parameters = {
    primaryKey: "**********",
    workspaceId: "a2090ead-8c9f-4fba-b70e-533e3e003163",
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.extensions.beginEnableAzureMonitorAndWait(
    resourceGroupName,
    clusterName,
    parameters
  );
  console.log(result);
}

enableClusterMonitoring().catch(console.error);
