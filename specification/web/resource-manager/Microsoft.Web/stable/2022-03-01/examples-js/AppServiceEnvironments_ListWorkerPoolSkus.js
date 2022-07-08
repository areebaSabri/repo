const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Get available SKUs for scaling a worker pool.
 *
 * @summary Description for Get available SKUs for scaling a worker pool.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/AppServiceEnvironments_ListWorkerPoolSkus.json
 */
async function getAvailableSkUsForScalingAWorkerPool() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "test-rg";
  const name = "test-ase";
  const workerPoolName = "workerPool1";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.appServiceEnvironments.listWorkerPoolSkus(
    resourceGroupName,
    name,
    workerPoolName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getAvailableSkUsForScalingAWorkerPool().catch(console.error);
