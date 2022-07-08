const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Get the network endpoints of all inbound dependencies of an App Service Environment.
 *
 * @summary Description for Get the network endpoints of all inbound dependencies of an App Service Environment.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/GetInboundNetworkDependenciesEndpoints.json
 */
async function getTheNetworkEndpointsOfAllInboundDependenciesOfAnAppServiceEnvironment() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const name = "SampleAse";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.appServiceEnvironments.listInboundNetworkDependenciesEndpoints(
    resourceGroupName,
    name
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getTheNetworkEndpointsOfAllInboundDependenciesOfAnAppServiceEnvironment().catch(console.error);
