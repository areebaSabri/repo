const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates an HDInsight cluster extension.
 *
 * @summary Creates an HDInsight cluster extension.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/CreateExtension.json
 */
async function createAMonitoringExtensionOnHadoopLinuxCluster() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const extensionName = "clustermonitoring";
  const parameters = {
    primaryKey: "**********",
    workspaceId: "a2090ead-8c9f-4fba-b70e-533e3e003163",
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.extensions.beginCreateAndWait(
    resourceGroupName,
    clusterName,
    extensionName,
    parameters
  );
  console.log(result);
}

createAMonitoringExtensionOnHadoopLinuxCluster().catch(console.error);
