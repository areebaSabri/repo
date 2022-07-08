const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for List Hosting Environment Detector Responses
 *
 * @summary Description for List Hosting Environment Detector Responses
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/Diagnostics_ListHostingEnvironmentDetectorResponses.json
 */
async function getAppServiceEnvironmentDetectorResponses() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "Sample-WestUSResourceGroup";
  const name = "SampleAppServiceEnvironment";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.diagnostics.listHostingEnvironmentDetectorResponses(
    resourceGroupName,
    name
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getAppServiceEnvironmentDetectorResponses().catch(console.error);
