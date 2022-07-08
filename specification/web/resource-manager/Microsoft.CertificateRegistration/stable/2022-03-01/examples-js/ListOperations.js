const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider
 *
 * @summary Description for Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider
 * x-ms-original-file: specification/web/resource-manager/Microsoft.CertificateRegistration/stable/2022-03-01/examples/ListOperations.json
 */
async function listOperations() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.certificateRegistrationProvider.listOperations()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listOperations().catch(console.error);
