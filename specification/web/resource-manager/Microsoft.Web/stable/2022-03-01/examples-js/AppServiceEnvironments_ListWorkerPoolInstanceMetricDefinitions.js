const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Get metric definitions for a specific instance of a worker pool of an App Service Environment.
 *
 * @summary Description for Get metric definitions for a specific instance of a worker pool of an App Service Environment.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/AppServiceEnvironments_ListWorkerPoolInstanceMetricDefinitions.json
 */
async function getMetricDefinitionsForASpecificInstanceOfAWorkerPoolOfAnAppServiceEnvironment() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "test-rg";
  const name = "test-ase";
  const workerPoolName = "0";
  const instance = "10.8.0.7";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.appServiceEnvironments.listWorkerPoolInstanceMetricDefinitions(
    resourceGroupName,
    name,
    workerPoolName,
    instance
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getMetricDefinitionsForASpecificInstanceOfAWorkerPoolOfAnAppServiceEnvironment().catch(
  console.error
);
