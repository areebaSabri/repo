const { WorkloadsClient } = require("@azure/arm-workloads");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Puts the SAP Application Server Instance. <br><br>This will be used by service only. PUT by end user will return a Bad Request error.
 *
 * @summary Puts the SAP Application Server Instance. <br><br>This will be used by service only. PUT by end user will return a Bad Request error.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/preview/2021-12-01-preview/examples/sapvirtualinstances/SAPApplicationServerInstances_Create.json
 */
async function sapApplicationServerInstancesCreate() {
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const resourceGroupName = "test-rg";
  const sapVirtualInstanceName = "X00";
  const applicationInstanceName = "app01";
  const body = {
    location: "westcentralus",
    tags: {},
  };
  const options = { body };
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPApplicationServerInstances.beginCreateAndWait(
    resourceGroupName,
    sapVirtualInstanceName,
    applicationInstanceName,
    options
  );
  console.log(result);
}

sapApplicationServerInstancesCreate().catch(console.error);
