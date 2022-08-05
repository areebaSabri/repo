const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the async operation status of execution operation.
 *
 * @summary Gets the async operation status of execution operation.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/GetScriptExecutionAsyncOperationStatus.json
 */
async function getsTheAsyncExecutionOperationStatus() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const operationId = "CF938302-6B4D-44A0-A6D2-C0D67E847AEC";
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.scriptActions.getExecutionAsyncOperationStatus(
    resourceGroupName,
    clusterName,
    operationId
  );
  console.log(result);
}

getsTheAsyncExecutionOperationStatus().catch(console.error);
