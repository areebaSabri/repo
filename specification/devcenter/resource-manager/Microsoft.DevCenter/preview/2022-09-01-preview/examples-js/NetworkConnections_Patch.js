const { DevCenterClient } = require("@azure/arm-devcenter");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Partially updates a Network Connection
 *
 * @summary Partially updates a Network Connection
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-09-01-preview/examples/NetworkConnections_Patch.json
 */
async function networkConnectionsUpdate() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "rg1";
  const networkConnectionName = "uswest3network";
  const body = {
    domainPassword: "New Password value for user",
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.networkConnections.beginUpdateAndWait(
    resourceGroupName,
    networkConnectionName,
    body
  );
  console.log(result);
}

networkConnectionsUpdate().catch(console.error);
