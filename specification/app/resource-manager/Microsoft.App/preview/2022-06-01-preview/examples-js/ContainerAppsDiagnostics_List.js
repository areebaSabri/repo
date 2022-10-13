const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the list of diagnostics for a given Container App.
 *
 * @summary Get the list of diagnostics for a given Container App.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-06-01-preview/examples/ContainerAppsDiagnostics_List.json
 */
async function getTheListOfAvailableDiagnosticsForAGivenContainerApp() {
  const subscriptionId = "f07f3711-b45e-40fe-a941-4e6d93f851e6";
  const resourceGroupName = "mikono-workerapp-test-rg";
  const containerAppName = "mikono-capp-stage1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.containerAppsDiagnostics.listDetectors(
    resourceGroupName,
    containerAppName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getTheListOfAvailableDiagnosticsForAGivenContainerApp().catch(console.error);
