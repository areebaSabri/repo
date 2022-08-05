const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets properties of the specified application.
 *
 * @summary Gets properties of the specified application.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/GetApplicationCreated.json
 */
async function getApplicationOnHdInsightClusterSuccessfullyCreated() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const applicationName = "app";
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.applications.get(resourceGroupName, clusterName, applicationName);
  console.log(result);
}

getApplicationOnHdInsightClusterSuccessfullyCreated().catch(console.error);
