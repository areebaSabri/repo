const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Configures the gateway settings on the specified cluster.
 *
 * @summary Configures the gateway settings on the specified cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/HDI_Clusters_UpdateGatewaySettings_Enable.json
 */
async function enableHttpConnectivity() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const parameters = {
    isCredentialEnabled: true,
    password: "**********",
    userName: "hadoop",
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginUpdateGatewaySettingsAndWait(
    resourceGroupName,
    clusterName,
    parameters
  );
  console.log(result);
}

enableHttpConnectivity().catch(console.error);
