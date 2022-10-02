const { AzureAnalysisServices } = require("@azure/arm-analysisservices");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Resumes operation of the specified Analysis Services server instance.
 *
 * @summary Resumes operation of the specified Analysis Services server instance.
 * x-ms-original-file: specification/analysisservices/resource-manager/Microsoft.AnalysisServices/stable/2017-08-01/examples/resumeServer.json
 */
async function resumeAServer() {
  const subscriptionId = "613192d7-503f-477a-9cfe-4efc3ee2bd60";
  const resourceGroupName = "TestRG";
  const serverName = "azsdktest";
  const credential = new DefaultAzureCredential();
  const client = new AzureAnalysisServices(credential, subscriptionId);
  const result = await client.servers.beginResumeAndWait(resourceGroupName, serverName);
  console.log(result);
}

resumeAServer().catch(console.error);
