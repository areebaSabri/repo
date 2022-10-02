const { AzureVMwareSolutionAPI } = require("@azure/arm-avs");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Cancel a ScriptExecution in a private cloud
 *
 * @summary Cancel a ScriptExecution in a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/ScriptExecutions_Delete.json
 */
async function scriptExecutionsDelete() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const scriptExecutionName = "{scriptExecutionName}";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.scriptExecutions.beginDeleteAndWait(
    resourceGroupName,
    privateCloudName,
    scriptExecutionName
  );
  console.log(result);
}

scriptExecutionsDelete().catch(console.error);
