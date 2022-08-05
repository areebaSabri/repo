const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the private endpoint connections for a HDInsight cluster.
 *
 * @summary Lists the private endpoint connections for a HDInsight cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/GetAllPrivateEndpointConnectionsInCluster.json
 */
async function getAllPrivateEndpointConnectionsForASpecificHdInsightCluster() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateEndpointConnections.listByCluster(
    resourceGroupName,
    clusterName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getAllPrivateEndpointConnectionsForASpecificHdInsightCluster().catch(console.error);
