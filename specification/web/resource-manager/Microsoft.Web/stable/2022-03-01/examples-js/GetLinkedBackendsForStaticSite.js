const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Returns details of all backends linked to a static site
 *
 * @summary Returns details of all backends linked to a static site
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/GetLinkedBackendsForStaticSite.json
 */
async function getDetailsOfTheLinkedBackendsRegisteredWithAStaticSite() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.staticSites.listLinkedBackends(resourceGroupName, name)) {
    resArray.push(item);
  }
  console.log(resArray);
}

getDetailsOfTheLinkedBackendsRegisteredWithAStaticSite().catch(console.error);
